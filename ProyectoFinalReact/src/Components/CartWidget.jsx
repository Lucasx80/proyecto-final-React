import React, { useContext } from 'react'
import '../Components/Estilos/CartWidget.css'
import cart from '../assets/cart.svg'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const {totalProducst} = useContext(CartContext)

  return (
    <>
    {totalProducst() > 0
    ?
    <Link to={"/cart"}>
    <div className='carrito'>
      <img src={cart} alt="Imagen Carrito" srcset="" />
      <span className='cart-counter'>{totalProducst()}</span>
    </div>
    </Link>
    :
    ""
    }
    </>
  )
}

export default CartWidget
