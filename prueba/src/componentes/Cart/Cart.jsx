import React, { useContext} from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"

import CartItem from './CartItem'

const Cart = () => {

    const { carrito, removeFromCart, totalPrice} = useContext(CartContext)
console.log(carrito.length)

   const handleRemoveFromCart = (i) =>{
removeFromCart(i)
}
    console.log(carrito)
    console.log("here")

 totalPrice()

  
    

    return(
        
        <>
      
      {carrito.length >= 1 &&       
        
<div>{totalPrice()}</div>}

       {carrito.length >= 1 ? (
       carrito.map((p) => {
          
            return(

                
                    
         <CartItem  name={p.name} price={p.price} amount={p.amount} img={p.img} id={p.id} link={p.link} handleRemoveFromCart={handleRemoveFromCart} />
                 

         )

        })) : 
        (<div>
        <div>No hay Items en el carrito</div>

        <Link to="/">
        <button>ir a menu principal</button>
        </Link>
        </div>
            )

        }  

        </>
    )
}
export default Cart;