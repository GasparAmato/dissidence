import React, {useState} from "react";
import ItemDetailContainer from "./expandedItems/ItemDetailContainer"

const Item = ({id, name, price, img, colorName, colorStyle}) => {
    const [montado, setMontado] = useState(false)


   
    
    const as = id; 


return(
    <>
    {id &&
        <div className={[as, "card "].join(' ')} >
    <div>
        <img src={img} alt="" />
        <div>name:{name}</div>
        <div>price:{price}</div>
        <button onClick={setMontado(true)} >OPEN</button> 
         {montado && <ItemDetailContainer id={id} name={name} price={price} colorName={colorName} colorStyle={colorStyle}/>}

        
    </div>
</div>}
</>
)
}

    export default Item;