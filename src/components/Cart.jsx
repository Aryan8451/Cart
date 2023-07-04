import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const {cartitems,subTotal,tax,shipping,total} = useSelector(state=>state.cart)
  const img1="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
  const dispatch =useDispatch();
  const  increment=(id)=>{
    dispatch({
      type:"addToCart",
      payload:{id}
    }
    )
  }
  const  decrement=(id)=>{
    dispatch({
      type:"decrement",
      payload:id
    }
    )
  }
  const  deleteHandler=(id)=>{
    dispatch({
      type:"deletefromcart",
      payload:id
    }
    )
  }

    dispatch({
      type:"calculateprice",
    }
    )
  
    return (
    
    <div className='cart'>

      <main>
        {
          cartitems.length > 0 ?(
            cartitems.map(i=>(
              <CartItem  imgSrc={i.imgSrc} name={i.name} price={i.price} qt={i.quantity} id={i.id} key={i.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler} />
            ))
          ): <h1> no items selected yet</h1>
        }
       
      </main>
      <aside>
        <h2>subtotal:${subTotal}</h2>
        <h2>shipping:${shipping}</h2>
        <h2>tax:${tax}</h2>
        <h2>total:${total}</h2>
      </aside>
    </div>
  )
}
const img1="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"

const CartItem= ({imgSrc=img1,name,price,qt=1,decrement,increment,id,deleteHandler})=>(
  <div className="CartItem">
    <img src={imgSrc} alt="name"  />
    <article>
      <h2>{name}</h2>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={()=>decrement(id)}>-</button>
      <p>{qt}</p>
      <button onClick={()=>increment(id)}>+</button>
      
    </div>
    <AiFillDelete onClick={()=>deleteHandler(id)}/>
  </div>
)

export default Cart