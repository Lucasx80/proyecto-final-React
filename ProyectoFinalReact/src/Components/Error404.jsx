import React from 'react'
import "../Components/Estilos/Error404.css"
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error-container '>
      <h1><b>No se encuentra la página solicitada.</b></h1>
      <Link to={"/"}>Volver a la página de inicio</Link>
    </div>
  )
}

export default Error404
