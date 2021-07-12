import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial}) => {
    
const [number, setNumber] = useState(parseInt(initial));

const suma = () => {
number < stock && setNumber(number+1)
};
const resta = () => {
number > initial && setNumber(number-1)
};



    return(
        <div className="container-counter">
<button  onClick={suma} className="plus-btn">+</button>
<div className="shown-number">{number}</div>
<button  onClick={resta} className="min-btn">-</button>

</div>



        
        
    )
    };
    
    export default ItemCount;