import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const img1="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
const img2 ="https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260"
const img3 ="https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4"
const Home = () => {
  
  const  productList =[
    {name:"macbook",price:12000,imgSrc:img3,id:"dsfasdf",},
    {name:"shoes",price:3455,imgSrc:img2,id:"dsfifjasdf",},
    {name:"drone ",price:1000,imgSrc:img1  ,id:"dsfasdsafedf",},
  ]
    
  const dispatch =useDispatch()
  const AddToCartHandler= (option) =>{
    console.log(option)
   
    dispatch({type:"addToCart",payload:option})
    dispatch({type:"calculateprice"})
     toast.success("added to cart")
  }
  return (
    <div className='Home'>Home 
    {
      productList.map((item)=>(
        <ProductCard id={item.id} handler={AddToCartHandler} key={item.id} name={item.name} price={item.price} imgSrc={item.imgSrc}/>
      ))
    }
    </div>
    
  )
}
const ProductCard=({name,id,price,handler,imgSrc})=>(
<div className='productCard'>
<img src={imgSrc} alt={name}  />
<p>{name}</p>
<h4>${price}</h4>
<button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}> add to cart</button>
</div>
)

export default Home