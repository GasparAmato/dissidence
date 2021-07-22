import React from "react";
import { Link } from "react-router-dom";
import ItemCount from '../itemCount';

import Exit from'../../../assets/img/exit-img.jpg';

const ItemDetail = ({id, name, price, img,  colorName, colourStyle, link }) => {


    const as = id;

return(
    <>
   
    {id &&
        <div className={[as, "Detail"].join(' ')} >
    
    <div className="detail-container-flex">
        <Link to={`/${link}`}>
        <img className="exit" src={Exit} alt="salir" />
        </Link>
        
            

        <div>    
            <img className="img-Detail" src={img} alt="ropa" />
                      
        </div>

        <div className="Description">
            <div>
                <div className="name"> {name}</div>
                <div className="price">$ {price}</div>
                <div className="color">COLOR: {colorName}<div className={colourStyle}></div> </div> 
                <div>Description: </div>
                <ItemCount stock={10} initial={1} />
                

            </div>
        </div>
  
        </div>
        
        
  
</div>}


</>
)
}

    export default ItemDetail;