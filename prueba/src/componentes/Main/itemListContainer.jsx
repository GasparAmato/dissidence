import  {useState, useEffect} from 'react'
import ItemList from './itemList'



import Img1 from '../../assets/imgProducts/imagen-producto-1.jpg'
import Img2 from '../../assets/imgProducts/imagen-producto-2.jpg'
import Img3 from '../../assets/imgProducts/imagen-producto-3.jpg'
import Img4 from '../../assets/imgProducts/imagen-producto-4.jpg'
import Img5 from '../../assets/imgProducts/imagen-producto-5.jpg'

const ItemListContainer = () => {

    const arrayProducts =   [{
        "id":"one",
        "name":"1",
        "price": 5000,
        "img":Img1,
        "colorName":"Beige",
        "colorStyle":"background-color: rgb(238, 191, 169);" ,
        },

        {
          "id":"two",
          "name":"2",
          "price": 3200,
          "img":Img2,
          "colorName":"White",
          "colorStyle":"background-color: white;" ,
          },
          {
            "id":"three",
            "name":"3",
            "price": 2200,
            "img":Img3,
            "colorName":"Black",
            "colorStyle":"" ,
            },{
                "id":"four",
                "name":"4",
                "price": 2200,
                "img":Img4,
                "colorName":"Black",
                "colorStyle":"" 
                },{
                    "id":"five",
                    "name":"5",
                    "price": 2200,
                    "img":Img5,
                    "colorName":"White",
                    "colorStyle":"" 
                    }
                    // ,{
                    //     "id":"6",
                    //     "name":"6",
                    //     "price": 2200,
                    //     "img":"",
                    //     "colorName":"White",
                    //     "colorStyle":""  
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

                
                        const lila = lista;


                        return (
                   
      <div>
<ItemList Lista={lila}/>


</div>
                        )
        };                      
    

export default ItemListContainer;