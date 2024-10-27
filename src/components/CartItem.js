import React from 'react'

function CartItem({ title, price, brand }) {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">Brand: {brand}</p>
      </div>
      <p className="text-lg font-bold text-blue-600">${price}</p>
    </div>
  )
}

export default CartItem