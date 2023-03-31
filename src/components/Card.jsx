import imgCardMobile from '../assets/image-product-mobile.jpg'
import { RiShoppingCartLine } from 'react-icons/ri'

export function Card () {
  return (
    <article className='flex flex-col items-center rounded-lg bg-red-300 w-[299px] bg-white'>
      <img src={imgCardMobile} alt='' className='rounded-t-lg object-cover' />
      <div className='p-4 gap-3 flex flex-col text-darkGrayishBlue'>
        <p className=''>PERFUME</p>
        <p className='text-3xl font-bold font-fontFamily1 text-[#000]'>Grabielle Essence Eau De Parfum</p>
        <p className='text-sm text-darkGrayishBlue font-medium'>A floral, and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House  of CHANEL</p>
        <div className='flex items-center gap-3 '>
          <p className='text-3xl font-bold font-fontFamily1 text-darkCyan'>$149.99</p>
          <p className='text-sm line-through'>$169.99</p>
        </div>
        <button className='bg-darkCyan p-3 text-white font-bold text-sm w-full rounded-lg flex items-center gap-3 justify-center'><RiShoppingCartLine />Add to Cart</button>
      </div>
    </article>
  )
}
