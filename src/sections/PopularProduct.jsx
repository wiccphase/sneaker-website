import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h1 className='font-bold font-palanquin text-4xl'> Our <span className='text-coral-red'> Popular </span> products</h1>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experiec top-products</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
          ))}        
      </div>


    </section>
  )
}

export default PopularProduct