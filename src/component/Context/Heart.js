import React, { useContext, useEffect, useState } from "react";
import { globalstate } from "./Context";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Heart.css";
  
  
const Heart=()=>{

    let[product,setproduct]=useState([]);
   let {state,dispatch}=useContext(globalstate);


   useEffect(()=>{

    let d=state.arr.filter((value,index)=>{
        return value.heart==true
  })
  setproduct(d);


   },[product])

const handle=(id)=>{
     let g=product.map((value,index)=>{
        return value.id==id?{...value,heart:!value.heart}:value
     })

   setproduct(g)
   console.log(g)
   let v=state.arr.map((value,index)=>{
    return value.id==id?{...value,heart:!value.heart}:value
 })
 dispatch ({type:"update name",payload:v})
}



    return(
  
        <div className="prod">
            {product.map((a,i)=>{
                return(
                    <div className="prod1">
                       <img src={a.img}/>
                       <h1>{a.name}</h1>
                       <h5>{a.display}</h5>
                       <h3>{a.price}</h3>
                            <button>{a.rating}<FaStarHalfAlt/></button>
                             {a.heart? <div><span onClick={()=>handle(a.id)} className="color"><FaHeart /></span></div>:<div><span onClick={()=>handle(a.id)}><FaHeart /></span></div>} 

                    </div>
                )
            })}
            
        </div>
    )
}
export default Heart;