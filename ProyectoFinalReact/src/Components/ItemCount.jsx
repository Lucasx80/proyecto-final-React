import React, { useState } from 'react';
import "./Estilos/ItemCount.css"
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [itemStock, setStock] = useState(stock);
  const [visible, setVisible] = useState(true);

  const addItem = () => {
    if (count < itemStock) {
      setCount(count + 1);
    }
  };

  const delItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const agregarCarrito = () => {
    if (count <= itemStock) {
      setStock(itemStock - count);
      onAdd(count)
      setCount(1);
      setVisible(false);
      console.log("agregaste " + count);
    }
  };

  return (
    <div className='count-container'>
      <div className="counter-btn">
        <button onClick={delItem}>-</button>
        <span>{count}</span>
        <button onClick={addItem}>+</button>
      </div>

      <div className="agregar-btn">
        {itemStock > 0 ? (
          visible ? (
            <p onClick={agregarCarrito} >Agregar al carrito</p>
          ) : (
            <Link to={"/cart"}><p className='end-shop-btn'>Terminar compra</p></Link>
          )
        ) : (
          <p>Sin stock</p>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
