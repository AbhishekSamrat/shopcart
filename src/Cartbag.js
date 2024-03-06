import React, { createContext, useReducer, useState } from 'react'


const shop = createContext()
const Cartbag = ({children}) => {

const remove = (itemm)=>{
     setcart(cart.filter(product=> product.id !== itemm.id))
     dispatch("decrement")
}

    const [cart,setcart] = useState([])
    const addedcart = (itemm)=>{
       setcart([...cart,itemm])
         dispatch("increment")     
    }
    const initialstate = 0;
    const reducer = (curr,action)=>{
            switch(action){
              case "increment":
                return curr+1
                case "decrement":
                  return curr-1
                  default :
                    return curr
            }
           
    }
    const[state,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
    <shop.Provider  value={{cart,addedcart,remove,state}}>
      {children}
    </shop.Provider>
    
    
    </div>
  )
}

export default Cartbag
export {shop}