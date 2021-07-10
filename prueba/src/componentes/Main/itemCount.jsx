import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial}) => {
    
const [number, setNumber] = useState(parseInt(initial));
const [plus, setPlus] = useState(false)
const [minus, setMinus] = useState(false)

useEffect(() => {
if (number >= stock) {
    setPlus(true)
   
} else if (number <= initial ) {
    setMinus(true)
    
}else{
    setPlus(false)
    setMinus(false)
}

}, [number, initial, stock]);


    return(
        <div className="container-counter">
<button disabled={plus} onClick={() => setNumber(number+1)} className="plus-btn">+</button>
<div className="shown-number">{number}</div>
<button disabled={minus} onClick={() => setNumber(number-1)} className="min-btn">-</button>
</div>



        
        
    )
    };
    
    export default ItemCount;