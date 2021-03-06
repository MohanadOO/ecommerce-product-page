import { useState, useEffect } from 'react'
import Cart from './Cart'

function Nav(props) {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)

  function handleModel() {
    setMenu(true)
  }

  function openCart() {
    setCart((prevDate) => !prevDate)
  }

  useEffect(() => {
    const modal = document.querySelector('#modal')
    if (menu === true) {
      modal.showModal()
    }
  }, [menu])

  return (
    <>
      {/* Mobile Nav */}
      {menu ? (
        <dialog
          id='modal'
          className='modal z-30 ml-0 min-h-screen w-[15rem] list-none bg-white py-20 pt-10 font-bold text-neutral-black  md:hidden'
        >
          <ul
            aria-label='navigation'
            className='ml-5 flex flex-col gap-7 text-lg text-neutral-black '
          >
            <li className='mr-3 mb-8' onClick={() => setMenu(!menu)}>
              <a className='cursor-pointer'>
                <img src='/images/icon-close.svg' alt='Close Icon' />
              </a>
            </li>
            <li>
              <a className='cursor-pointer'>Collection</a>
            </li>
            <li>
              <a className='cursor-pointer'>Men</a>
            </li>
            <li>
              <a className='cursor-pointer'>Women</a>
            </li>
            <li>
              <a className='cursor-pointer'>About</a>
            </li>
            <li>
              <a className='cursor-pointer'>Contact</a>
            </li>
          </ul>
        </dialog>
      ) : (
        ''
      )}
      <ul
        aria-label='navigation'
        className='h-30 fixed z-20 flex w-screen items-center justify-between bg-white px-5 py-7 md:hidden'
      >
        {!menu ? (
          <li className='mr-3' onClick={handleModel}>
            <a className='cursor-pointer'>
              <img src='/images/icon-menu.svg' alt='Menu Icon' />
            </a>
          </li>
        ) : (
          ''
        )}
        <li className='mb-[2px]'>
          <a className='cursor-pointer'>
            <img src='/images/logo.svg' alt='Logo' />
          </a>
        </li>
        <li className='relative ml-auto mr-5'>
          {props.counter > 0 ? (
            <p className='absolute bottom-3 left-2 rounded-lg bg-primary-orange px-2 text-xs text-neutral-white'>
              {props.counter}
            </p>
          ) : (
            ''
          )}
          <a className='cursor-pointer' onClick={openCart}>
            <img src='/images/icon-cart.svg' alt='Cart Icon' />
          </a>
        </li>
        <li>
          <a className='cursor-pointer' onClick={openCart}>
            <img
              src='/images/image-avatar.png'
              className='h-10 rounded-full hover:border-2 hover:border-primary-orange'
              alt='Avatar'
            />
          </a>
        </li>
      </ul>
      {cart ? <Cart counter={props.counter} /> : ''}

      {/* Desktop Nav */}
      <ul
        aria-label='navigation'
        className='h-30 top-0 z-20 hidden w-full  bg-white py-7 shadow-md md:fixed md:flex md:items-center md:px-10 md:text-sm lg:px-20 lg:text-base'
      >
        <li className='mb-[2px] md:max-w-[15%] lg:max-w-full'>
          <a className='cursor-pointer'>
            <img src='/images/logo.svg' alt='Logo Icon' />
          </a>
        </li>
        <ul className='ml-10 flex text-neutral-dark_grayish-blue md:gap-3 lg:gap-5'>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a className='cursor-pointer'>Collection</a>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a className='cursor-pointer'>Men</a>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a className='cursor-pointer'>Women</a>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a className='cursor-pointer'>About</a>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a className='cursor-pointer'>Contact</a>
          </li>
        </ul>

        <li className='relative ml-auto md:mr-3 lg:mr-10'>
          {props.counter > 0 ? (
            <p className='absolute bottom-3 left-2 rounded-lg bg-primary-orange px-2 text-xs text-neutral-white'>
              {props.counter}
            </p>
          ) : (
            ''
          )}
          <a className='cursor-pointer' onClick={openCart}>
            <img src='/images/icon-cart.svg' alt='Cart Icon' />
          </a>
        </li>
        <li>
          <a className='cursor-pointer' onClick={openCart}>
            <img
              src='/images/image-avatar.png'
              alt='Avatar'
              className='rounded-full hover:border-2 hover:border-primary-orange md:h-10 lg:h-12'
            />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Nav
