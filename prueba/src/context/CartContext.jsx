import React, {createContext,  useState} from 'react'



export const CartContext = createContext() 

export const CartProvider = ({children}) => {

 const [carrito, setCarrito] = useState([])





 
 const addCart = (item) => {
    setCarrito([...carrito.filter( p => p.id !== item.id ), item])
 }

 const removeFromCart =(id) => {
     setCarrito([carrito.filter(p => p.id !== id )])
 }
 const clearCart = () => {
     setCarrito([])
 }

    
return(
    <CartContext.Provider value={{carrito, addCart}}>
        {children}
    </CartContext.Provider>
)
}