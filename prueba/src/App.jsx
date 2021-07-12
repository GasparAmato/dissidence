import React from 'react';
import './App.css';

import Navbar from "./componentes/NavBar/NavBar";
import ItemList from "./componentes/Main/itemList";
import ItemCount from './componentes/Main/itemCount';

import Logo from "./assets/img/logo-dissident.jpg";
import imgcarrito from "./assets/img/icono_cart.jpg"


function App() {
 

  return (
    <>
    <div className="App">
      <Navbar logo={Logo} imgCarrito={imgcarrito}  />

<h1>Dissident</h1>  
      <ItemList />

      <ItemCount initial="1" stock="9" />


    </div>
    </>
  );
}

export default App;
