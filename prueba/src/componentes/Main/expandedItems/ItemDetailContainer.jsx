import React, {useState, useEffect} from 'react';
import { Route } from 'react-router';

import ItemDetail from './ItemDetail';
import Navbar from '../../NavBar/NavBar';


import Img1 from '../../../assets/imgProducts/imagen-producto-1.jpg'
import Img2 from '../../../assets/imgProducts/imagen-producto-2.jpg'
import Img3 from '../../../assets/imgProducts/imagen-producto-3.jpg'
import Img4 from '../../../assets/imgProducts/imagen-producto-4.jpg'
import Img5 from '../../../assets/imgProducts/imagen-producto-5.jpg'

import Logo from '../../../assets/img/logo-dissident.jpg';
import ImgCarrito from '../../../assets/img/icono_cart.jpg';

const ItemDetailContainer = () => {
     const arrayProducts =   [{
          "id":"one",
          "name":"1",
          "price": 5000,
          "img":Img1,
          "colorName":"Beige",
          "colourStyle":" rgb(238, 191, 169" ,
          },
  
          {
            "id":"two",
            "name":"2",
            "price": 3200,
            "img":Img2,
            "colorName":"White",
            "colourStyle":" white" ,
            },
            {
              "id":"three",
              "name":"3",
              "price": 2200,
              "img":Img3,
              "colorName":"Black",
              "colourStyle":"" ,
              },{
                  "id":"four",
                  "name":"4",
                  "price": 2200,
                  "img":Img4,
                  "colorName":"Black",
                  "colourStyle":"" 
                  },{
                      "id":"five",
                      "name":"5",
                      "price": 2200,
                      "img":Img5,
                      "colorName":"White",
                      "colourStyle":"" 
                      }
                      // ,{
                      //     "id":"6",
                      //     "name":"6",
                      //     "price": 2200,
                      //     "img":"",
                      //     "colourName":"White",
                      //     "colourStyle":""  
                      //     }
                      ]
                         
                          
                          const [lista, setLista] = useState([]);
  
                          const promiseProducts = () =>{
                              return new Promise((resolve)=>{
                                  setTimeout(() => resolve(arrayProducts))
                              }); };
                          useEffect(()=> {
                          // eslint-disable-next-line
                          promiseProducts().then((p) => {setLista(p)} )},[]);
                          promiseProducts().catch(console.log("error"));
  
                  

                          


return(
<div>

{lista.map((u) => {
                return(
<Route key={u.id} exact path={`/clothes/${u.id}`}>

<Navbar logo={Logo} imgCarrito={ImgCarrito}  />             
<ItemDetail id={u.id} name={u.name} price={u.price} img={u.img} colorName={u.colorName} /> 
{/*  colourBackground={u.colourStyle} */} 
</Route>
)})
}

</div>
)
}

export default ItemDetailContainer; 