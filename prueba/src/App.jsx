import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from  "react-router-dom"
 

import Navbar from "./componentes/NavBar/NavBar";
// import ItemCount from './componentes/Main/itemCount';


import Logo from "./assets/img/logo-dissident.jpg";
import imgcarrito from "./assets/img/icono_cart.jpg"

import ItemListContainer from './componentes/Main/itemListContainer'
import ItemDetailContainer from './componentes/Main/expandedItems/ItemDetailContainer';




/* <ItemCount initial="1" stock="9" /> */  
function App() {
 

  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/">
        <Navbar logo={Logo} imgCarrito={imgcarrito}  />
        <ItemListContainer/>
      </Route>
      <Route>
    <ItemDetailContainer/>
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
