import React from "react";

const ItemDetail = ({id, name, price, img,  colorName, colourStyle }) => {


    const as = id;

return(
    <>
    <div className="container-detail">
    {id &&
        <div className={[as, "Detail"].join(' ')} >
    <div >
        
        
        
        <img src={img} alt="" />
        <div>NAME:{name}</div>
        <div>PRICE:{price}</div>
        <div>COLOR:{colorName} <div className="circle-colour"></div> </div> 
        {/* style={`background-color:${colourStyle};`}    */}
    </div>
</div>}
</div>
</>
)
}

    export default ItemDetail;