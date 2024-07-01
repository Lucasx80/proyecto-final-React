import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Estilos/Cart.css'

const Cart = () => {

  const {carrito, removeItem, clear, totalProducst, totalPagar} = useContext(CartContext);


  if (totalProducst()== 0) {
    return (
      <div className='msj-carrito-vacio'>
        <h4>Tu carrito esta vacio!</h4>
        <Link to={"/"}> Volver a la pagina principal</Link>
      </div>
    )
    
  }
  return(
    
    
    <div className="cart">
      <button className="empty-cart-button" onClick={clear}>Vaciar Carrito</button>
      <div className="cart-items">
        {carrito.map((producto) => (
          <div key={producto.id} className="cart-item">
            <img src={producto.image} alt={producto.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{producto.title}</h4>
              <p>Cantidad: {producto.quantity}</p>
              <p>Precio: ${(producto.price * producto.quantity)}</p>
            </div>
            <button className="empty-cart-button" onClick={()=> {removeItem(producto.id)}}>X</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total a pagar: ${totalPagar()}</h3>
        <Link to={"/checkout"}><h4>Finalizar Compra</h4></Link>
      </div>
    
    </div>
  )
}

export default Cart
