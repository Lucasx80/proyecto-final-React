import React, { useEffect, useState } from 'react'
import '../Components/Estilos/ItemListContainer.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs,query, where } from 'firebase/firestore';
import {db} from "../main"




const ItemListContainer = ({ greeting}) => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();


  useEffect(() => {
    const productosEcommerce = collection(db, "productosEcommerce")
    
    const q = categoryId ? query(productosEcommerce, where("category", "==", categoryId)) : productosEcommerce


    getDocs(q)
    .then((resp) =>{
      setProducts(
        resp.docs.map((doc)=>{
          return {...doc.data(), id: doc.id}
        })
      )
      setLoading(false)
    })

  }, [categoryId]);

  

  return (
    <section className='hero'>
      <div className='container'>
        <h1>{greeting}</h1>
        {loading
          ? <div className='carga'>...Cargando</div>
          : 
        <ItemList  products={products} />
      }
      
      </div>
    </section>


  )
}

export default ItemListContainer;
