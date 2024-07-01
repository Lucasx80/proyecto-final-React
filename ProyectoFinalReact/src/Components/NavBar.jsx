import React, { useState } from 'react';
import '../Components/Estilos/NavBar.css';
import logo from '../assets/logo.jpg';
import '../assets/logo.jpg';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  const [border, setBorder] = useState(null)

  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
        <img onClick={()=> setBorder(null)}src={logo} alt="" />
        </Link>
      </div>
      
      <ul>
        <li><NavLink onClick={()=> setBorder("Nike")} className= {border === "Nike" ?  "active" :  ""} to={"/category/Nike"} >Nike</NavLink></li>
        <li><NavLink onClick={()=> setBorder("Adidas")} className= {border === "Adidas" ?  "active" :  ""} to={"/category/Adidas"} >Adidas</NavLink></li>
        <li><NavLink onClick={()=> setBorder("New Balance")} className= {border === "New Balance" ?  "active" :  ""} to={"/category/New Balance"}>New Balance</NavLink></li>
        <li><NavLink onClick={()=> setBorder("Topper")} className= {border === "Topper" ?  "active" :  ""} to={"/category/Topper"} >Topper</NavLink></li>
        <li><NavLink onClick={()=> setBorder("Puma")} className= {border === "Puma" ?  "active" :  ""} to={"/category/Puma"}>Puma</NavLink></li>
        <li><NavLink onClick={()=> setBorder("Vans")} className= {border === "Vans" ?  "active" :  ""} to={"/category/Vans"}>Vans</NavLink></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
