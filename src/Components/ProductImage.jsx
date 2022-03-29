import React from 'react'

function ProductImage() {
  const [image, setImage] = React.useState(1)
  return (
    <div className='relative pt-20 md:pt-2 '>
      <img
        className='mb-5 md:rounded-lg'
        src={`/images/image-product-${image}.jpg`}
      />
      <div className='mb-10 hidden items-center justify-between gap-3 overflow-auto md:flex'>
        <img
          className='w-[100px]  rounded-lg border-primary-orange hover:border-4'
          src='/images/image-product-1-thumbnail.jpg'
        />
        <img
          className='w-[100px] rounded-lg border-primary-orange hover:border-4'
          src='/images/image-product-2-thumbnail.jpg'
        />
        <img
          className='w-[100px] rounded-lg border-primary-orange hover:border-4'
          src='/images/image-product-3-thumbnail.jpg'
        />
        <img
          className='w-[100px] rounded-lg border-primary-orange hover:border-4'
          src='/images/image-product-4-thumbnail.jpg'
        />
      </div>
      <button
        onClick={() =>
          setImage((prevImage) =>
            prevImage <= 4 && prevImage > 1 ? prevImage - 1 : prevImage
          )
        }
        className='absolute top-[50%] left-3 z-10 h-12 w-12 rounded-full  bg-neutral-light_grayish-blue md:hidden'
      >
        <img src='/images/icon-previous.svg' className='mx-auto' />
      </button>
      <button
        onClick={() =>
          setImage((prevImage) =>
            prevImage >= 1 && prevImage < 4 ? prevImage + 1 : prevImage
          )
        }
        className='absolute top-[50%] right-3 z-10 h-12 w-12 rounded-full  bg-neutral-light_grayish-blue md:hidden'
      >
        <img src='/images/icon-next.svg' className='mx-auto' />
      </button>
    </div>
  )
}

export default ProductImage
