import React from "react"


const Navbar = ({logo}) => {
    return (
        
    <nav>
        
        <div className="menu">
            <img className="logo" src={logo} alt="" />
        
        <div className="section-opciones">
        
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About us</a></li>
<li><a href="#clothes">Clothes</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

  </div>
  </div>
  
    </nav>

    

    )
};

export default Navbar;