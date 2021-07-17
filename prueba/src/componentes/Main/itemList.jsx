import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';



const ItemList = (Lista) =>{
    const lil = Lista;
    const lil1 = lil.Lista;
    console.log("crak del universe");
    
        
    
return(
<div className="super-container">
    <div className="card-container">
        
            <Item/>     
            {lil1.map((u) => {
                return(
            <Link key={u.id} to={`/clothes/${u.id}`}>            
            <Item  id={u.id} name={u.name} img={u.img} price={u.price}/>
            </Link>
            )
        })}
                     
      </div>
</div>
)
   
};
    
    export default ItemList;