import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=> {
  const [carrito, setCarrito] = useState([]);

  const addItem = (item, quantity) =>{
    if (isInCart(item.id)) {
      const productos = carrito.find(prod => prod.id === item.id);
      productos.quantity += quantity;
      setCarrito([...carrito])
    }else{
      setCarrito([...carrito,{...item, quantity:quantity}])
    }
  }

  const removeItem = (id) =>{
    const itemsBorrados = carrito.filter(productos => productos.id !== id);
    setCarrito([...itemsBorrados])
  }

  const clear = () =>{
    setCarrito([])
  }

  const isInCart = (id) =>{
    return carrito.some(prod => prod.id === id);
    
  }

  const totalProducst = ()=>{
    return carrito.reduce((acc, item) => acc += item.quantity, 0)
  }

  const totalPagar = ()=>{
    return carrito.reduce((acc, item) => acc += item.price * item.quantity, 0)
  }

  return(
   <CartContext.Provider value={{carrito,addItem,removeItem,clear,isInCart, totalPagar,totalProducst}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider;