import React from 'react';
import './App.css';

import Navbar from "./componentes/NavBar/NavBar";
import ItemCount from './componentes/Main/itemCount';


import Logo from "./assets/img/logo-dissident.jpg";
import imgcarrito from "./assets/img/icono_cart.jpg"

import ItemListContainer from './componentes/Main/itemListContainer'




function App() {
 

  return (
    <>
    <div className="App">
      <Navbar logo={Logo} imgCarrito={imgcarrito}  />

<h1>Dissident</h1>  

      

      <ItemCount initial="1" stock="9" />


      
      <ItemListContainer/>
    


     


    </div>
    </>
  );
}

export default App;
