import React from "react";
import image1 from "../../assets/image1.jpg"
import { RiDeleteBackFill } from "react-icons/ri";
import "./CartCard.css"
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice";

function CartCard({name,price,image,id}) {
    let dispatch=useDispatch()
    return(
        <div className="CartCard">
            <div className="left-card">
                <img src={image} alt="" />
                <div className="name-price"></div>
                <span>{name}</span>
                <span>Rs {price}/-</span>

            </div>
            <div className="right-card">
                <button onClick={()=>{
                    dispatch(RemoveItem(id))
                    alert("product Removed successfully...")

                }}>Remove <RiDeleteBackFill /></button>

            </div>

        </div>
    )
}
export default CartCard