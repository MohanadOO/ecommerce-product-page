import { useState } from 'react'
import ProductImage from './ProductImage'
import CartLogo from './CartLogo'

function Product() {
  const [counter, setCounter] = useState(0)
  const [addToCart, setAddToCart] = useState(0)

  function handlePlus() {
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
  }

  function handleMinus() {
    setCounter((prevCounter) => {
      return prevCounter >= 1 ? prevCounter - 1 : prevCounter
    })
  }

  function handleCart(e) {
    setAddToCart(counter)
  }

  return (
    <>
      <div className='block md:hidden'>
        <ProductImage />
      </div>
      <div className='mt-8 mb-5 items-center gap-20  px-10 md:px-12 md:pt-20 lg:mb-0 lg:flex lg:px-20 desktop:px-52'>
        <div className=' hidden md:block lg:max-w-[440px]'>
          <ProductImage />
        </div>
        <div className='desktop:w-[600px]'>
          <div className='flex flex-col gap-3 leading-relaxed'>
            <p className='font-bold uppercase text-primary-orange'>
              Sneaker Company
            </p>
            <h2 className='text-2xl font-bold lg:mb-2 lg:text-5xl'>
              Fall Limited Edition Sneakers
            </h2>
            <p className='text-neutral-dark_grayish-blue'>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole they'll withstand everything
              the weather can offer.
            </p>
          </div>

          <div className='mt-5 flex items-center gap-5'>
            <p className='text-2xl font-bold'>$125.00</p>
            <p className='rounded-md bg-primary-pale-orange px-3 font-bold text-primary-orange'>
              50%
            </p>
            <p className='ml-auto font-thin text-neutral-dark_grayish-blue line-through md:hidden'>
              $250.00
            </p>
          </div>
          <p className='ml-auto mt-3 hidden font-thin text-neutral-dark_grayish-blue line-through md:block'>
            $250.00
          </p>

          <div className='pb-10 md:flex'>
            <div className='mt-5 mr-10 flex w-full items-center justify-center rounded-md bg-neutral-light_grayish-blue p-4 md:mr-auto md:w-[40%]'>
              <button className='mr-auto cursor-pointer' onClick={handleMinus}>
                <img src='/images/icon-minus.svg' />
              </button>
              <p className='mr-auto text-lg font-bold'>{counter}</p>
              <button className='cursor-pointer' onClick={handlePlus}>
                <img src='/images/icon-plus.svg' />
              </button>
            </div>

            <div
              onClick={handleCart}
              className='mt-6 flex cursor-pointer justify-center gap-3 rounded-lg bg-primary-orange p-4 font-semibold shadow-lg shadow-primary-orange md:w-[50%]'
            >
              <CartLogo fill='white' />
              <p className='text-neutral-white'>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
