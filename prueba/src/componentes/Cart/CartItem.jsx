import React from 'react'
import { Link} from 'react-router-dom';


const CartItem = ({name, price, amount, img, id, link, handleRemoveFromCart}) => {

const handlerOnClick  = () => {
    handleRemoveFromCart(id)
} 

    return(
        <>
        <div className="CartItemContainer">

        <img className="CartItemImg" src={img} alt="" />

        <div className="CartItemDataContainer" >
            <div>
        <div>Name: {name}</div>
        <div>Amount: {amount}</div>
        <div>Total price:{price * amount}</div>

        <button onClick={handlerOnClick} className="CartItemDeleteButton">Delete Item</button>

        <Link to={`/${link}/${id}`}>
        <button>Change Item</button>
        </Link>
            </div>
        </div>

        </div>
        

        </>
    )
}
export default CartItem;