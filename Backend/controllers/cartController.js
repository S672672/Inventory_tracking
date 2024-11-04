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

    
    console.log("Adding item to cart:", { itemId, itemType });

   
    const existingCartItem = user.cart.find(cartItem => 
      cartItem.itemId && cartItem.itemId.toString() === itemId && cartItem.itemType === itemType
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1; 
    } else {
      
      if (!itemId || !itemType) {
        return res.status(400).json({ message: "Item ID and type are required" });
      }
      
      user.cart.push({ itemId, itemType, quantity: 1 });
    }

    
    user.cart = user.cart.filter(cartItem => cartItem.itemId && cartItem.itemType);

    
    console.log("User before saving:", user);

    await user.save(); 

    return res.status(200).json({ message: "Item added to cart", cart: user.cart });
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
      return res.status(404).json({ message: 'User not found' });
    }

    const cartItems = await Promise.all(user.cart.map(async (cartItem) => {
      let itemDetails;
      
      switch (cartItem.itemType) {
        case 'Product':
          itemDetails = await Product.findById(cartItem.itemId);
          break;
        case 'Cake':
          itemDetails = await Cake.findById(cartItem.itemId);
          break;
        case 'Accessory':
          itemDetails = await Accessory.findById(cartItem.itemId);
          break;
        default:
          throw new Error('Unknown item type');
      }
      
    
      if (!itemDetails) {
        return {
          itemId: cartItem.itemId,
          itemType: cartItem.itemType,
          name: 'Item not found',
          description: 'This item is no longer available.',
          price: 0,
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
    }));

    return res.json({ cart: cartItems });
  } catch (error) {
    console.error('Error fetching cart:', error);
    return res.status(500).json({ message: 'Error fetching cart' });
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

    return res.status(200).json({ message: "Item removed from cart", cart: user.cart });
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

module.exports = { addToCart, getCart, removeFromCart, clearCart };
