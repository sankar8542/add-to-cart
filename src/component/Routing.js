import React,{useReducer} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from "./Router/Home";
import {globalstate} from '../component/Context/Context.js';
 import { initialstate,reducer } from "./Context/Reducer.js";
import Hello from './Context/Hello.js';
import  Heart  from './Context/Heart.js';
import Cart from './Context/Cart.js';


const Product=()=>{

    let [state,dispatch]=useReducer(reducer,initialstate)
    console.log(state)
    return(

        <div>
            <globalstate.Provider value={{state,dispatch}}>
            <BrowserRouter>
            <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              {/* <Route path='/' element={<Details/>}/> */}
              <Route path='/' element={<Hello/>}/>
              <Route path='/Heart' element={<Heart/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
            
            </BrowserRouter>
            </globalstate.Provider>
        </div>
    )
}
export default Product