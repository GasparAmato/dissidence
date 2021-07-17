import React  from "react";


const Item = ({id, name, price, img}) => {
    


   
    
    const as = id; 


return(
    <>
    {id &&
        <div className={[as, "card "].join(' ')} >
    <div>
        <img src={img} alt="" />
        <div>name:{name}</div>
        <div>price:{price}</div>
         
        

        
    </div>
</div>}
</>
)
}

    export default Item;