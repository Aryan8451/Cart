import {createReducer} from "@reduxjs/toolkit"

export const cartReducer =createReducer({
    cartitems:[],subTotal:0,shipping:0,tax:0,total:0
},{
    addToCart: (state,action)=>{
        const item = action.payload;
        const isItemExist = state.cartitems.find(i=>i.id===item.id)
        if(isItemExist){
            state.cartitems.forEach(i=>{
                if(i.id===item.id) i.quantity+=1
            })

        }else{
            state.cartitems.push(item)
        }
    },
    decrement:(state,action)=>{
        const item = state.cartitems.find(i=>i.id===action.payload)
        if(item.quantity>1){
            state.cartitems.forEach((i)=>{
                if(i.id===item.id) i.quantity -=1;
            })
        }
    },
    deletefromcart:(state,action)=>{
        state.cartitems = state.cartitems.filter((i)=> i.id !== action.payload)
    },
    calculateprice:(state)=>{
        let sum =0;
        state.cartitems.forEach(i=>sum=sum+i.price*i.quantity)
        state.subTotal=sum;
        state.shipping =state.subTotal>1000? 0: 150;
        state.tax =+(state.subTotal*0.18).toFixed()
        state.total =state.subTotal+state.tax+state.shipping;
    }

});