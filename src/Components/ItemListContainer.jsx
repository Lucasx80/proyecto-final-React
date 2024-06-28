import React, { useEffect, useState } from 'react'
import '../Components/Estilos/ItemListContainer.css'
import ItemList from './ItemList';
import arrayProductos from "../productos.json"
import { useParams } from 'react-router-dom';


const fetchItems = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(arrayProductos)
    }, 500)
  })
};

const ItemListContainer = ({ greeting}) => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();


  useEffect(() => {
    const getApi = async ()=>{
      const data = await fetchItems(id)
      setProducts(id ? data.filter(item => item.category === id) : data)
      setLoading(false)
    }
    getApi();
  }, [id]);

  return (
    <section className='hero'>
      <div className='container'>
        <h1>{greeting}</h1>
        <p>{loading
          ? <div>Cargando...</div>
          : 
        <ItemList  products={products} />
      }</p>
      
      </div>
    </section>


  )
}

export default ItemListContainer;
