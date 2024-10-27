import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Card({product,title , description , images , brand , stock , rating , price}) {
  const {cartItems ,setCartItems} = useContext(CartContext);
  const updateCart = (item) => {
    setCartItems([...cartItems , item])
  }
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    {/* Card Image */}
    <img className="w-full h-48 object-cover" src={images} alt="Product" />

    {/* Card Body */}
    <div className="p-6">
      {/* Card Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      
      {/* Brand */}
      <p className="text-gray-500 text-sm mb-2">
        <span className="font-semibold">Brand:</span> {brand}
      </p>

      {/* Price, Stock, and Rating */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-lg font-bold text-blue-600">${price}</p>
        <p className={`text-sm ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <p className="text-yellow-500 text-lg mr-2">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
        <span className="text-sm text-gray-500">({rating}/5)</span>
      </div>

      {/* Card Description */}
      <p className="mt-3 text-gray-600">{description}</p>

      {/* Action Button */}
      <div className="flex justify-between mt-4">
          <button className="w-1/2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Product
          </button>
          <button onClick={() => updateCart(product)} className="w-1/2 ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Add to Cart
          </button>
        </div>
    </div>
  </div>
  )
}

export default Card