import React from 'react';
import './App.css';

import Navbar from "./componentes/NavBar/NavBar";
import ItemList from "./componentes/Main/itemList";

import Logo from "./assets/img/logo-dissident.jpg";
import imgcarrito from "./assets/img/icono_cart.jpg"


function App() {
  

  return (
    <>
    <div className="App">
      <Navbar logo={Logo} imgCarrito={imgcarrito}  />

<h1>Dissident</h1>  
      <ItemList />



    </div>
    </>
  );
}

export default App;
