// const User = require("../models/User");
// const Cake = require("../models/Cake");

// // Add item to cart
// const addToCart = async (req, res) => {
//     const { cakeId } = req.body;
//     const userId = req.user.id;
  
//     try {
//       const cake = await Cake.findById(cakeId);
//       if (!cake) {
//         return res.status(404).json({ message: "Product not found" });
//       }
  
//       const user = await User.findById(userId);
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       const existingCartItem = user.cart.find(
//         (item) => item.cakeId.toString() === cakeId
//       );
//       if (existingCartItem) {
//         existingCartItem.quantity += 1;
//       } else {
//         user.cart.push({ cakeId, quantity: 1 });
//       }
  
//       await user.save();
  
//       return res
//         .status(200)
//         .json({ message: "Item added to cart", cart: user.cart });
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       return res.status(500).json({ message: "Server error" });
//     }
//   };

// // Get user's cart
// const getCart = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const user = await User.findById(userId).populate("cart.cakeId");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({ cart: user.cart });
//   } catch (error) {
//     console.error("Error fetching cart:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Remove item from cart
// const removeFromCart = async (req, res) => {
//   const { cakeId } = req.body;
//   const userId = req.user.id;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.cart = user.cart.filter(
//       (item) => item.cakeId.toString() !== cakeId
//     );
//     await user.save();

//     return res
//       .status(200)
//       .json({ message: "Item removed from cart", cart: user.cart });
//   } catch (error) {
//     console.error("Error removing from cart:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Clear cart
// const clearCart = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.cart = []; // Clear the cart
//     await user.save();

//     return res.status(200).json({ message: "Cart cleared", cart: user.cart });
//   } catch (error) {
//     console.error("Error clearing cart:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { addToCart, getCart, removeFromCart, clearCart };
