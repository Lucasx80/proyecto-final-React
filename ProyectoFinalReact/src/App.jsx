
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Error404 from './Components/Error404'
import CartContextProvider from './Components/CartContext'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import { useState } from 'react'

function App() {
  
  

  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path={"/"} element={<ItemListContainer greeting= "Just Sneakers"  />}/>
    <Route exact path={"/category/:categoryId"} element={<ItemListContainer/>}/>
    <Route exact path={"/item/:id"} element={<ItemDetailContainer/>}/>
    <Route exact path={"/cart"} element={<Cart/>}/>
    <Route exact path={"/checkout"} element={<Checkout/>}/>
    <Route exact path={"*"} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  

    
    
  )
}

export default App
