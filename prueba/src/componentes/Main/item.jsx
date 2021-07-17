import React, { useState } from "react";
import ItemDetailContainer from "./expandedItems/ItemDetailContainer"

const Item = ({id, name, price, img, colorName, colorStyle}) => {
   



    const as = id; 

console.log("hola")
return(
    <>
    {id &&
        <div className={[as, "card "].join(' ')} >
    <div>
        <img src={img} alt="" />
        <div>name:{name}</div>
        <div>price:{price}</div>
        <button >OPEN</button> 
         {}

        
    </div>
</div>}
</>
)
}

    export default Item;