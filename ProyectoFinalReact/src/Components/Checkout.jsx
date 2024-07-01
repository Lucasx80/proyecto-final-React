import React, { useContext, useState } from 'react'
import '../Components/Estilos/Checkout.css'
import { useForm } from 'react-hook-form';
import { CartContext } from './CartContext';
import { db } from '../main';
import { addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {

  const {carrito,  clear, totalPagar, totalProducst} = useContext(CartContext);

  const [pedidoId, setPedidoId] = useState("");

  const { register, handleSubmit, formState:{errors} } = useForm();

  const orden = (data)=>{
    const pedido = {
      data : data,
      productos: carrito,
      total: totalPagar()
    }

    const pedidos = collection(db, "pedidos")

    addDoc(pedidos, pedido)
    .then((doc) =>{
      setPedidoId(doc.id)
      clear();
    })

  }

  if (pedidoId) {
    return(
    <div className='msj-compra'>
      <h2>Gracias por tu compra</h2>
      <p>Tu número de orden es {pedidoId}</p>
      <Link to={"/"}> Volver a la pagina principal</Link>
    </div>

    )
  }

  if (totalProducst() == 0) {
    return(
      <div className="checkout-vacio">
        <h2>No hay productos en tu carrito</h2>
        <Link to={"/"}> Volver a la pagina principal</Link>
      </div>
    )
  }



  return (


    <div className="container">
    <h1 className="main-title">Checkout</h1>
    <form className="formulario" onSubmit={handleSubmit(orden)}>

        <input htmlFor="nombre" type="text" placeholder="Ingresá tu nombre" {...register("nombre",{
          required:true
        })} />
        {errors.nombre && <span className='error-form'>Nombre requerido</span>}
        <input htmlFor="email" type="email" placeholder="Ingresá tu e-mail" {...register("email",{
          required: true
        })} />
        {errors.email && <span className='error-form'>Email requerido</span>}
        <input htmlFor="telefono" type="phone" placeholder="Ingresá tu teléfono" {...register("telefono",{
          required: true
        })} />
        {errors.telefono && <span className='error-form'>Teléfono requerido</span>}

    <div className="checkout-total">
      <p>Total= ${totalPagar()}</p>
    </div>
        <button className="enviar" type="submit">Comprar</button>
    </form>
</div>


)
}

export default Checkout
