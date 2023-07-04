import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { useSelector } from 'react-redux'


const Header = () => {
  const {cartitems}= useSelector(state=>state.cart)
  return (

    <nav>
      <h2>
        logo here
      </h2>
      <div>
        <Link to={"/"} >home</Link>
        <Link to={"/Cart"} > 

        <FiShoppingCart size={"1.5rem"}/>
        <p>{cartitems.length}</p>
        
        </Link>
        
      </div>

    </nav>
  )
}

export default Header