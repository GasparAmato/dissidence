import React from "react";
import CartWidget from "./CartWidget";


const Navbar = ({logo, imgCarrito}) => {
    return (
        
    <nav>
        
        <div className="menu">
            <img className="logo" src={logo} alt="" />
        
        <div className="section-opciones">
        
        <CartWidget imgCarrito={imgCarrito} />


  </div>
  </div>
  
    </nav>

    

    )
};

export default Navbar;