import React from 'react'

function Cart(props) {
  return (
    <>
      {props.counter <= 0 ? (
        <div className='fixed top-28 z-[30] ml-5 w-[90%] rounded-md bg-neutral-white text-sm shadow-2xl mobile:top-32 md:top-[6.3rem] md:right-8 md:w-[54%] lg:w-[35%] desktop:w-[25%]'>
          <h3 className='p-5 font-bold text-neutral-very_dark-blue'>Cart</h3>
          <hr />
          <div className='flex items-center justify-center py-14 mobile:py-20'>
            <p className='font-bold text-neutral-dark_grayish-blue'>
              Your cart is empty.
            </p>
          </div>
        </div>
      ) : (
        <div className='fixed top-28 z-[30] ml-5 w-[90%] rounded-md bg-neutral-white text-sm shadow-2xl mobile:top-32 md:top-[6.3rem] md:right-8 md:w-[54%] lg:w-[35%] desktop:w-[25%]'>
          <h3 className='p-5 font-bold text-neutral-very_dark-blue'>Cart</h3>
          <hr />
          <div className='px-5 pb-5'>
            <div className='flex items-center justify-around gap-5 py-7 '>
              <img
                alt='Product Image'
                className='w-14 rounded-lg'
                src='/images/image-product-1-thumbnail.jpg'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-neutral-dark_grayish-blue'>
                  Autumn Limited Edition...
                </p>
                <p className='font-bold text-neutral-dark_grayish-blue'>
                  $125.00 x {props.counter}{' '}
                  <span className='font-bold text-neutral-black'>
                    ${(props.counter * 125.0).toFixed(2)}
                  </span>
                </p>
              </div>
              <img alt='Delete Icon' src='/images/icon-delete.svg' />
            </div>
            <div className='flex cursor-pointer justify-center rounded-lg bg-primary-orange p-4 font-semibold shadow-primary-orange'>
              <button className='font-bold text-neutral-white'>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
