import React, {createContext, useContext, useState} from 'react'


const CartContext = createContext() 

const useCartContext = () => useContext(CartContext)
export function ListProvider({children, initial}){
    const [count, setCount] = useState()
    setCount(initial)
return(
    <CartContext.Provider value={count}>
        {children}
    </CartContext.Provider>
)
}