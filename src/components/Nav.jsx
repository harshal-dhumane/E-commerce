import React from "react";
import { FaShopify } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi";
import "./nav/Nav.css"
import { Link, useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"





function Nav() {
  let dispatch= useDispatch()
  let items=useSelector(state=>state)
  console.log(items)
  return (
    <div className="nav">
        <div className="top-nav">
             <Link to="/"><div className="logo">
                <span>V-Shop</span>
                <FaShopify />

            </div></Link>
            <form className="search-box">
              <input type="text" placeholder="search Items" />
              <button><IoSearchOutline />
              </button>

            </form>
            <Link to="/cart"><div className="cart-box">
            <FiShoppingCart />
            <span>{items.cart.length}</span>

            </div>
            </Link>

        </div>
        <div className="bottom-nav
        ">
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/cart"><li>cart</li></Link>
         <Link to="/contact"><li>Contact</li></Link> 

        </div>
    

    </div >
    

    
  )
}
export default Nav