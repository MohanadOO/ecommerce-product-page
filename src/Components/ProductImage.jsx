import React from 'react'

function ProductImage() {
  const [image, setImage] = React.useState(1)

  return (
    <div className='relative md:mt-96 lg:mt-0'>
      <img
        className='mb-5 md:rounded-lg'
        src={`/images/image-product-${image}.jpg`}
      />
      <div className='mb-10 hidden items-center justify-between gap-3 overflow-auto md:flex'>
        <img
          onClick={() => setImage(1)}
          className='imgThumbnail w-[100px]  cursor-pointer rounded-lg border-primary-orange hover:border-4 hover:brightness-110'
          src='/images/image-product-1-thumbnail.jpg'
        />
        <img
          onClick={() => setImage(2)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-primary-orange hover:border-4 hover:brightness-110'
          src='/images/image-product-2-thumbnail.jpg'
        />
        <img
          onClick={() => setImage(3)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-primary-orange hover:border-4 hover:brightness-110'
          src='/images/image-product-3-thumbnail.jpg'
        />
        <img
          onClick={() => setImage(4)}
          className='imgThumbnail w-[100px] cursor-pointer rounded-lg border-primary-orange hover:border-4 hover:brightness-110'
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
