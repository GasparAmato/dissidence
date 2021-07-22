import React, {useState, useEffect} from 'react';
import { Route, useParams } from 'react-router';

import ItemDetail from './ItemDetail';



import Img1 from '../../../assets/imgProducts/imagen-producto-1.jpg'
import Img2 from '../../../assets/imgProducts/imagen-producto-2.jpg'
import Img3 from '../../../assets/imgProducts/imagen-producto-3.jpg'
import Img4 from '../../../assets/imgProducts/imagen-producto-4.jpg'
import Img5 from '../../../assets/imgProducts/imagen-producto-5.jpg'



const ItemDetailContainer = () => {
     const arrayProducts =   [
         {
          "id":"one",
          "link":"women",
          "name":"Pijama con capucha - talle unico",
          "price": 5000,
          "img":Img1,
          "colorName":"Beige",
          "colourStyle":"beige" ,
          },
  
          {
            "id":"two",
            "link":"women",
            "name":"Campera tipo poncho - blanca",
            "price": 3200,
            "img":Img2,
            "colorName":"White",
            "colourStyle":"white" ,
            },
            {
              "id":"three",
              "link":"women",
              "name":"3",
              "price": 2200,
              "img":Img3,
              "colorName":"Black",
              "colourStyle":"black" ,
              },{
                  "id":"four",
                  "link":"women",
                  "name":"4",
                  "price": 2200,
                  "img":Img4,
                  "colorName":"Black",
                  "colourStyle":"black" 
                  },{
                      "id":"five",
                      "link":"women",
                      "name":"5",
                      "price": 2200,
                      "img":Img5,
                      "colorName":"White",
                      "colourStyle":"white" 
                      }
                      ,{
                          "id":"6",
                          "link":"women",
                          "name":"6",
                          "price": 2200,
                          "img":"",
                          "colourName":"White",
                          "colourStyle":""  
                          }
                      ] 
                         
                          
                          const [lista, setLista] = useState([]);
  
                          const promiseProducts = () =>{
                              return new Promise((resolve)=>{
                                  setTimeout(() => resolve(arrayProducts))
                              }); };
                          useEffect(()=> {
                          // eslint-disable-next-line
                          promiseProducts().then((p) => {setLista(p)} )},[]);
                          
  
     const { id } = useParams();             
    console.log(id)
                          


return(
<div>


{lista.map((u) => {
                return(

<Route key={u.id} exact path={`/${u.link}/${ u.id }`}>
<ItemDetail id={u.id} name={u.name} price={u.price} img={u.img} colorName={u.colorName} colourStyle={u.colourStyle} link={u.link} /> 
 </Route>         
 
)})
}


</div>
)
}

export default ItemDetailContainer; 