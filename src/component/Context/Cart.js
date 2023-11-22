import React, { useContext, useEffect, useState } from "react";
import { globalstate } from "./Context";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
  
  
const Cart=()=>{

    let[cart,setCart]=useState([]);
   let {state,dispatch}=useContext(globalstate);


   useEffect(()=>{

    let d=state.arr.filter((value,index)=>{
        return value.cart==true
  })
  setCart(d);


   },[cart])

const handle=(id)=>{
     let g=cart.map((value,index)=>{
        return value.id==id?{...value,cart:!value.cart}:value
     })

   setCart(g)
   console.log(g)
   let v=state.arr.map((value,index)=>{
    return value.id==id?{...value,cart:!value.cart}:value
 })
 dispatch ({type:"update name",payload:v})
}



    return(
  
        <div className="cart">
            {cart.map((a,i)=>{
                return(
                    <div className="cart1">
                       <img src={a.img}/>
                       <h3>{a.name}</h3>
                       <h5>{a.display}</h5>
                       <h3>{a.price}</h3>
                            <button>{a.rating}<FaStarHalfAlt/></button>
                             {a.cart? <div><span onClick={()=>handle(a.id)} className="color"><FaShoppingCart /></span></div>:<div><span onClick={()=>handle(a.id)}><FaShoppingCart /></span></div>} 

                    </div>
                )
            })}
            
        </div>
    )
}
export default Cart;