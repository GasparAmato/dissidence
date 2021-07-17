import React from 'react';
import ItemDetail from './ItemDetail';



const ItemListContainer = ({id, name, price, img, colorName, colorStyle}) => {
console.log("abierto")


return(
<div>
     <ItemDetail id={id} name={name} price={price} colorName={colorName} colorStyle={colorStyle}/>

</div>
)
}

export default ItemListContainer; 