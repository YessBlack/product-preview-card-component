import imgCardMobile from '../assets/image-product-mobile.jpg'
import imgCardDesktop from '../assets/image-product-desktop.jpg'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

export function Card () {
  return (
    <article className='flex flex-col items-center rounded-lg bg-red-300 w-[299px] bg-white xl:flex-row xl:w-[600px]'>
      <div className='bg-mobile w-[299px] h-[220px] bg-cover rounded-t-lg xl:w-[800px] xl:h-[430px] xl:rounded-none xl:rounded-l-lg xl:bg-desktop' />
      <div className='p-4 gap-3 flex flex-col text-darkGrayishBlue xl:justify-between'>
        <p className=''>PERFUME</p>
        <p className='text-3xl font-bold font-fontFamily1 text-[#000]'>Grabielle Essence Eau De Parfum</p>
        <p className='text-sm text-darkGrayishBlue font-medium'>A floral, and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House  of CHANEL</p>
        <div className='flex items-center gap-3 '>
          <p className='text-3xl font-bold font-fontFamily1 text-darkCyan'>$149.99</p>
          <p className='text-sm line-through'>$169.99</p>
        </div>
        <button className='bg-darkCyan p-3 text-white font-bold text-sm w-full rounded-lg flex items-center gap-3 justify-center hover:bg-veryDarkBlue'><RiShoppingCartLine />Add to Cart</button>
      </div>
    </article>
  )
}
