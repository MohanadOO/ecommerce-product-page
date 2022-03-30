import React from 'react'
import Nav from './Components/Nav'
import Product from './Components/Product'

function App() {
  const [addToCart, setAddToCart] = React.useState(0)
  const [counter, setCounter] = React.useState(0)

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

  function handleCart() {
    setAddToCart(counter)
    setShowCart((prevCart) => !prevCart)
  }

  console.log(addToCart)

  return (
    <div className='h-screen items-center justify-center md:flex'>
      <Nav counter={addToCart} />
      <Product
        handleCart={handleCart}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        counter={counter}
      />
    </div>
  )
}

export default App
