
import '../Components/Estilos/Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, image, category, price, }) => {
  
  return (
    <div className='item-card'>
      <Link to={"/item/" + id}>
      
      <div className="item-title">
        <h2>{title}</h2>
      </div>
      <div className="item-img">
        <img src={image} alt="" />
      </div>
      <div className="item-info">
        <p>${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Item
