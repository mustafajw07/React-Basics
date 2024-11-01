import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Loader from './Loader';

function ProductPage() {
  const { id } = useParams();
  const { data , loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const { title, description, images, price, rating, stock, brand } = loading ? [] : data;
  return (
    <>
    {loading && <Loader />}
    <div className="mt-10 max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover"
        src={images} // Using the first image of the product
        alt={title}
      />

      {/* Product Details */}
      <div className="p-6 space-y-4">
        {/* Title and Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">Brand: {brand}</p>
        </div>

        {/* Price and Stock Status */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600">${price}</p>
          <p className={`text-sm font-medium ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg">★</span>
          <p className="ml-1 text-gray-600">{rating} / 5</p>
        </div>

        {/* Description */}
        <p className="text-gray-700">{description}</p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage