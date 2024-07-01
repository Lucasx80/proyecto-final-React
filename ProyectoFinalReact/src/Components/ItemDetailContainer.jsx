import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../main';
import '../Components/Estilos/ItemDetailContainer.css'



  

const ItemDetailContainer = () => {



  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {

    const docRef = doc(db, "productosEcommerce", id)
    getDoc(docRef)
    .then((resp)=>{
      setItem({
        ...resp.data(), id: resp.id
      })
      setLoading(false)
    })

  }, [id]);



  return (
    <div>
      
      {loading
          ? <div className='carga'>...Cargando</div>
        
          : 
      <ItemDetail item= {item} />
      }
      
    </div>
  )
}

export default ItemDetailContainer
