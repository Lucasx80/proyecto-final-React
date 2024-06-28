import React from 'react'
import "../Components/Estilos/ItemDetail.css"
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
  
  return (
    <div className="item-detail">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price}</p>
        <button className="item-button">Comprar</button>
        <ItemCount stock={item.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail
