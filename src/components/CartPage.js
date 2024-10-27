import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function CartPage() {
    const {cartItems} = useContext(CartContext);
const totalPrice = cartItems.length > 0 ? cartItems.reduce((total, item) => total + item.price, 0) : 0;
  return (
    <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
    <div className="bg-white rounded-lg shadow-md">
      {cartItems.length > 0 ? cartItems.map((item, index) => (
        <CartItem
          key={index}
          title={item.title}
          price={item.price}
          brand={item.brand}
        />
      )) : <h1>No Items in Cart</h1>}
      {totalPrice !== 0 && <div className="p-4 flex justify-between items-center border-t border-gray-300">
        <h2 className="text-lg font-semibold">Total Price:</h2>
        <p className="text-lg font-bold text-blue-600">${totalPrice}</p>
      </div>}
    </div>
  </div>
  )
}

export default CartPage