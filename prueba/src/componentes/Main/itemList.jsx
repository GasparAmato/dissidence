import React from 'react';
import Item from './item';







const ItemList = (Lista) =>{
    const lil = Lista;
    const lil1 = lil.Lista;
return(
<div className="super-container">
    <div className="card-container">
        
                      <Item/>     
                      {lil1.map((u) => (<Item id={u.id} name={u.name} img={u.img} price={u.price} colorName={u.colorName} colorStyle={u.colorStyle}/>))}
                       
      </div>
</div>
)
   
};
    
    export default ItemList;