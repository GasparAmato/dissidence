import React from "react";

const ItemDetail = ({id, name, price, img,  colorName, colorStyle }) => {
    const as = id;
console.log("chau")    

return(
    <>
    {id &&
        <div className={[as, "card "].join(' ')} >
    <div >
        <img src={img} alt="" />
        <div>name:{name}</div>
        <div>price:{price}</div>
        <div>color:{colorName} <div style={colorStyle} className="circle-colour"></div> </div>   
    </div>
</div>}
</>
)
}

    export default ItemDetail;