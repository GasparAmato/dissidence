import React, {useState, useEffect} from 'react';
import { Route, useParams } from 'react-router';

import ItemDetail from './ItemDetail';



import Img1 from '../../../assets/imgProducts/imagen-producto-1.jpg'
import Img2 from '../../../assets/imgProducts/imagen-producto-2.jpg'
import Img3 from '../../../assets/imgProducts/imagen-producto-3.jpg'
import Img4 from '../../../assets/imgProducts/imagen-producto-4.jpg'
import Img5 from '../../../assets/imgProducts/imagen-producto-5.jpg'

import Img6 from '../../../assets/imgProducts/imagen.producto-men-1.jpg'
import Img7 from '../../../assets/imgProducts/imagen.producto-men-2.jpg'
import Img8 from '../../../assets/imgProducts/imagen.producto-men-3.jpg'
import Img9 from '../../../assets/imgProducts/imagen.producto-men-4.jpg'
import Img10 from '../../../assets/imgProducts/imagen.producto-men-5.jpg'
import Img11 from '../../../assets/imgProducts/imagen.producto-men-6.jpg'



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
                          "id":"six",
                          "link":"men",
                          "name":"1",
                          "price": 2000,
                          "img":Img6,
                          "colourName":"White",
                          "colourStyle":""  
                          },{
                            "id":"seven",
                            "link":"men",
                            "name":"2",
                            "price": 2260,
                            "img":Img7,
                            "colourName":"White",
                            "colourStyle":""  
                            },{
                                "id":"eight",
                                "link":"men",
                                "name":"3",
                                "price": 2400,
                                "img":Img8,
                                "colourName":"White",
                                "colourStyle":""  
                                },{
                                    "id":"nine",
                                    "link":"men",
                                    "name":"4",
                                    "price": 2500,
                                    "img":Img9,
                                    "colourName":"White",
                                    "colourStyle":""  
                                    },{
                                        "id":"ten",
                                        "link":"men",
                                        "name":"5",
                                        "price": 2400,
                                        "img":Img10,
                                        "colourName":"White",
                                        "colourStyle":""  
                                        },{
                                            "id":"eleven",
                                            "link":"men",
                                            "name":"6",
                                            "price": 3000,
                                            "img":Img11,
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