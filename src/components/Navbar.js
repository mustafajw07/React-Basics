import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_INPUT } from '../constants/searchConstants';

function Navbar() {
  const input = useSelector(state => state.input);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch({type : ADD_INPUT , payload : {input : e.target.value}})
  }
  const {isDarkMode , setDarkMode} = useContext(ThemeContext);
  const updateTheme = () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <nav className={`shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center space-x-4">
            {/* Home and Cart Links */}
            <Link to="/" className={`${isDarkMode ? 'text-white font-semibold' : 'text-gray-800 font-semibold'}`}>Home</Link>
            <Link to="/cart" className={`${isDarkMode ? 'text-white font-semibold' : 'text-gray-800 font-semibold'}`}>Cart</Link>
          </div>
          {/* Search Bar */}
          <div className="flex items-center justify-center flex-1">
            <input 
              type="text"
              value={input}
              onChange={handleChange}
              className={`w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
              ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-gray-500' : 'border-gray-300 bg-white text-black focus:ring-blue-500'}`} 
              placeholder="Search..."
            />
          </div>

          {/* Dark Mode Button */}
          <div className="flex items-center">
            <button 
              onClick={updateTheme} 
              className={`ml-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 
              ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-400' : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500'}`}
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar