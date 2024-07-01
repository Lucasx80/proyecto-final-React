import React, { useContext } from 'react'
import "../Components/Estilos/ItemDetail.css"
import ItemCount from './ItemCount'
import { CartContext } from './CartContext'


const ItemDetail = ({item}) => {
  
  const {addItem} = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
  }

  return (
    <div className="item-detail">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price}</p>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail
