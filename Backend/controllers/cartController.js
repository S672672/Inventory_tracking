const User = require("../models/User");
const Product = require("../models/Product");
const Cake = require("../models/Cake");
const Accessory = require("../models/Accessory");

const addToCart = async (req, res) => {
  const { itemId, itemType } = req.body;
  const userId = req.user.id;

  try {
    let item;
    switch (itemType) {
      case "Product":
        item = await Product.findById(itemId);
        break;
      case "Cake":
        item = await Cake.findById(itemId);
        break;
      case "Accessory":
        item = await Accessory.findById(itemId);
        break;
      default:
        return res.status(400).json({ message: "Invalid item type" });
    }

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Log item details being added to the cart
    console.log("Item details:", {
      itemId: item._id,
      itemType,
      name: item.name,
      price: item.price,
      description: item.description,
    });

    const existingCartItem = user.cart.find(
      (cartItem) =>
        cartItem.itemId.toString() === itemId && cartItem.itemType === itemType
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
      console.log(`Updated quantity for ${existingCartItem.name}:`, existingCartItem.quantity);
    } else {
      user.cart.push({
        itemId,
        itemType,
        quantity: 1,
        name: item.name,
        price: item.price,
        description: item.description,
      });
      console.log(`Added new item to cart:`, {
        itemId,
        itemType,
        name: item.name,
        quantity: 1,
      });
    }

    await user.save();
    return res
      .status(200)
      .json({ message: "Item added to cart", cart: user.cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartItems = await Promise.all(
      user.cart.map(async (cartItem) => {
        let itemDetails;
    
        switch (cartItem.itemType) {
          case "Product":
            itemDetails = await Product.findById(cartItem.itemId);
            break;
          case "Cake":
            itemDetails = await Cake.findById(cartItem.itemId);
            break;
          case "Accessory":
            itemDetails = await Accessory.findById(cartItem.itemId);
            break;
          default:
            throw new Error("Unknown item type");
        }
    
        // If itemDetails is not found, fall back to the stored cart item
        if (!itemDetails) {
          return {
            itemId: cartItem.itemId,
            itemType: cartItem.itemType,
            name: cartItem.name || "Item not found",
            description: cartItem.description || "This item is no longer available.",
            price: cartItem.price || 0,
            quantity: cartItem.quantity,
          };
        }
    
        return {
          itemId: cartItem.itemId,
          itemType: cartItem.itemType,
          name: itemDetails.name,
          description: itemDetails.description,
          price: itemDetails.price,
          quantity: cartItem.quantity,
        };
      })
    );
    

    return res.json({ cart: cartItems });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return res.status(500).json({ message: "Error fetching cart" });
  }
};

const removeFromCart = async (req, res) => {
  const { itemId, itemType } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cart = user.cart.filter(
      (item) => item.itemId.toString() !== itemId || item.itemType !== itemType
    );
    await user.save();

    return res
      .status(200)
      .json({ message: "Item removed from cart", cart: user.cart });
  } catch (error) {
    console.error("Error removing from cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const clearCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cart = [];
    await user.save();

    return res.status(200).json({ message: "Cart cleared", cart: user.cart });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateCartItem = async (req, res) => {
  const { itemId, itemType, quantity } = req.body; // Get itemId, itemType, and quantity from request body
  const userId = req.user.id; // Get user ID from authenticated request

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the item in the cart
    const cartItem = user.cart.find(
      (item) => item.itemId.toString() === itemId && item.itemType === itemType
    );

    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Update quantity if greater than zero, else remove the item
    if (quantity > 0) {
      cartItem.quantity = quantity; // Update quantity
    } else {
      user.cart = user.cart.filter((item) => item !== cartItem); // Remove item
    }

    await user.save(); // Save changes to the user document
    return res
      .status(200)
      .json({ message: "Cart item updated", cart: user.cart });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
  updateCartItem,
};
