import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'
import Loader from './Loader';
import { useSelector } from 'react-redux';

function HomePage() {
  const {data , loading} = useFetch("https://dummyjson.com/products");
  const searchValue = useSelector(state => state.input.toLowerCase())
  const filteredProducts = data?.products?.filter((product) => 
    product.title.toLowerCase().includes(searchValue)
  );
  return (
   <>
    {loading && <Loader />}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
      {filteredProducts && filteredProducts.map((i) => <Card product={i} key={i.id} description={i.description} title={i.title} images={i.images[0]} rating={i.rating} brand={i.brand} stock={i.stock} price={i.price}/>)}
    </div>
   </>
  )
}

export default HomePage