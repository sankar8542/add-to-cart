import product from "../JSON/Product.json"
  console.log(product)
export const initialstate={
           
    arr:product.watches

}

export const reducer=(state,action)=>{
    if(action.type==="update name"){
              
        return{...state,arr:action.payload}
    }
  
        
}