import React, { useContext, useEffect, useState } from "react";
import { globalstate } from "./Context.js";
import "./Hello.css";
import { FaMobile } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Hello=()=>{
    
  let array=["https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7beee9cb3cfe9ccf.jpg?q=20","https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb9a4bc2ffd319f7.jpg?q=20",
              "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/56091e7e83bc3424.jpeg?q=20","https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78f0374b0191d762.jpg?q=20",
              "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eab800bf91815ca4.jpg?q=20"]

        const settings = {
          dots: true,
          autoplay:true,
          infinite: true,
          speed: 300,
          slidesToShow:1,
          slidesToScroll: 1
        };    
    let {state,dispatch}=useContext(globalstate);
    let x= useNavigate();
    let h=useNavigate();

       console.log(state)

       const handle=(r)=>{
            let s=state.arr.map((value,index)=>{
                return r==value.id?{...value,heart:!value.heart}:value  
            })
            dispatch ({type:"update name",payload:s})
            setAdd(s)
       }
       const handle1=(r)=>{
        let s=state.arr.map((value,index)=>{
            return r==value.id?{...value,cart:true}:value  
        })
        dispatch ({type:"update name",payload:s})
         setAdd(s)
   }
      

       let heart=()=>{
        x("/Heart");
        
       }
       let cart=()=>{
        h("/cart");
        
       }
       const plus=(r)=>{
        let t=state.arr.map((value,index)=>{
          return r==value.id?{...value,count:++value.count}:value  
      })
      setAdd(t)
      dispatch ({type:"update name",payload:t})
       }

       const minus=(r)=>{
        
           if(r.count>1){
            let t=state.arr.map((value,index)=>{
              return r.id==value.id?{...value,count:--value.count}:value  
              
          })
          setAdd(t)
          dispatch ({type:"update name",payload:t})

           }
           if(r.count=1)
           {
            let t=state.arr.map((value,index)=>{
              return r.id==value.id?{...value,cart:false}:value  
              
          })
          setAdd(t)
          dispatch ({type:"update name",payload:t})

           }     
       }
       const [input,setInput]=useState("")
       const [value, setValue]=useState([])
       const [add,setAdd]=useState(state.arr)
          console.log(add)
       
          useEffect(()=>{
              if(input==""){
                  setValue([])
              }
              else{
                 let f=state.arr.filter((a,i)=>{
                    return a.name.includes(input)
                 })
                 setValue(f)
              }
          },[input])
          useEffect(()=>{
              
          })
      const click=()=>{
           setAdd(value)
      }

    return(
        <div>
           <div>
           <div className="search">
                    {value.map((s,i)=>{
                         return(
                          <div className="bar">
                            <img src={s.img}/>
                             <h3>{s.name}</h3>
                             <p>{s.display}</p>
                          </div>
                         )
                    })}
                   </div>
                 </div>  
             <div className="nav">
                <h1><i>Flipkart</i></h1>
                <input onChange={(e)=>setInput(e.target.value)} type='text' placeholder="search our products"/>
                <button onClick={click}><FaSearch/></button>
              <div className="navigate">
              
              <div onClick={heart}><FaHeart/></div>
              <div onClick={cart}> <FaShoppingCart/></div>
                </div>  


            </div>  
            <div className="carosual">
           <Slider {...settings}>
          {array.map((a)=>{
             return <div>
                <img src={a} style={{width:'100%',height:'15rem'}}/>
             </div>

          })}
                 </Slider>
                 </div>
                  
        <div className="product">

            
            {add.map((value,index)=>{
                     return(
                        <div className="product1">
                            <img src={value.img}/>
                            <h2>{value.name}</h2>
                            <h5>{value.display}</h5>
                          <div className="product2">  
                            <h3>{value.price}</h3>
                            <button>{value.rating}<FaStarHalfAlt/></button>
                          </div>
                          <div className="icon">
                           {value.heart? <div><span onClick={()=>handle(value.id)} className="color"><FaHeart /></span></div>:<div><span onClick={()=>handle(value.id)}><FaHeart /></span></div>} 
                           {value.cart? <div><span  className="col"><button onClick={()=>minus(value)}><FaMinus/></button>{value.count}<button onClick={()=>plus(value.id)}><FaPlus/></button></span></div>
                           :<div><span onClick={()=>handle1(value.id)}><button className="button"><FaShoppingCart />Add to cart</button></span></div>} 
                          
                          </div>

                        </div>
                     )
            })}
            
        </div>
        </div>
    )
  
    }


export default Hello