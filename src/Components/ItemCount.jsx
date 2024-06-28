import React, { useState } from 'react'

const ItemCount = ({stock}) => {

  const [count, setCount] = useState(1)
  const [itemStock, setStock] = useState(stock)

  const onAdd = ()=>{
    if (count < itemStock) {
      setCount(count+1)
    }
  }

  
  const onDel = ()=>{
    if (count > 1) {
      setCount(count-1)
      
    }
  }

  const agregarCarrito = ()=>{
    if (count <= itemStock) {
      setStock(itemStock-count)
      setCount(1);
      console.log("agregaste "+ count);
    }
  }

  return (
    <div className='count-container'>
      <div className="counter-btn">
      <button onClick={onDel}>-</button>
      <button>{count}</button>
      <button onClick={onAdd}>+</button>
      </div>

    <div className="agregar-btn">
      {itemStock > 1 
      ?
      <p onClick={agregarCarrito}>Agregar al carrito</p>
      :
      <p >Sin stock</p>
        }
    </div>

    </div>
  )
}

export default ItemCount
