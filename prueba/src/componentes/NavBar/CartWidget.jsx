import React from "react";
import { Link } from "react-router-dom";

const cartWidget = ({imgCarrito}) => {
return(
    
<ul>
<Link to="/" >    
<li>Home</li>
</Link>


<Link to="AboutUs">
<li>About us</li>
</Link>

<Link to="nav/cart">
<li className="containerIconCont"><img className="iconoCarrito" src={imgCarrito} alt="" /><div className="contCart">0</div></li>
</Link>

<Link to="nav/contactus" >
<li>Contact</li>
</Link>

</ul>
);
};

export default cartWidget;