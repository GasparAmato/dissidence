import React from "react";


const cartWidget = ({imgCarrito}) => {
return(
    
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About us</a></li>
<li><a className="containerIconCont" href="#clothes"><img className="iconoCarrito" src={imgCarrito} alt="" /><div className="contCart">0</div></a></li>
<li><a href="#contact">Contact</a></li>
</ul>
);
};

export default cartWidget;