import  {useState, useEffect} from 'react'
import ItemList from './itemList'

import LogoMen from '../../assets/img/logo-men.jpg'


import Img1 from '../../assets/imgProducts/imagen.producto-men-1.jpg'
import Img2 from '../../assets/imgProducts/imagen-producto-men-2.jpg'
import Img3 from '../../assets/imgProducts/imagen-producto-men-3.jpg'
import Img4 from '../../assets/imgProducts/imagen-producto-men-4.jpg'
import Img5 from '../../assets/imgProducts/imagen-producto-men-5.jpg'
import Img6 from '../../assets/imgProducts/imagen-producto-men-6.jpg'

const ItemListContainerMen = () => {

    const arrayProducts =   [{
        "id":"one",
        "link":"men",
        "name":"ropa de hombre ",
        "price": 5000,
        "img":Img1,
        "colorName":"Beige",
        "colorStyle":"background-color: rgb(238, 191, 169);" ,
        },

        {
          "id":"two",
        "link":"men",
          "name":"Campera",
          "price": 3200,
          "img":Img2,
          "colorName":"White",
          "colorStyle":"background-color: white;" ,
          },
          {
            "id":"three",
            "link":"men",
            "name":"Campera ",
            "price": 2200,
            "img":Img3,
            "colorName":"Black",
            "colorStyle":"" ,
            },{
                "id":"four",
                "link":"men",
                "name":"Blazer ",
                "price": 2200,
                "img":Img4,
                "colorName":"Black",
                "colorStyle":"" 
                },{
                    "id":"five",
                    "link":"men",
                    "name":"Pantalon",
                    "price": 2200,
                    "img":Img5,
                    "colorName":"White",
                    "colorStyle":"" 
                    }
                    ,{
                        "id":"6",
                        "link":"women",
                        "name":"6",
                        "price": 2200,
                        "img":Img6,
                        "colorName":"White",
                        "colorStyle":""  
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
         
   
                
                        const lila = lista;


                        return (
                   
      <div>
          <div className="subtitle-flex">
          <img className="img-subtitle" src={LogoMen} alt="" />
          </div>
<ItemList Lista={lila}/>
    </div>
                        )
        };                      
    

export default ItemListContainerMen;