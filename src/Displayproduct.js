import React, { useContext } from 'react'
import { shop } from './Cartbag'

const Displayproduct = () => {
    const {cart,remove,state} = useContext(shop)
    const totlitem = cart.reduce((prev,curr)=> prev + curr.price,0)
  return (
    <div >
    <div>
    <h2 className='text-center bg-green-950 text-white p-2' style={{fontFamily:"fantasy"}}> No of items added = <span className='text-3xl bg-white text-black p-2'>{state}</span> And Total Price = <span className='text-3xl bg-white text-black p-2'>₹{totlitem}</span></h2>
   
    </div>
   
    <div className='flex flex-wrap ml-20 text-center mt-5'>
   
   

    {
        cart.map((el)=>{
            return(
                <div className='bg-neutral-300 w-72  mt-5 mx-5 text-center px-5 py-5 flex1'>
                <div>
                <img  src={el.image}/>
                <p>{el.name}</p>
                <span>{el.price}</span><br></br>
                <button className='bg-blue-400 p-2' onClick={()=>remove(el)} >Remove Cart</button>
                </div>
            
            
                </div>
            )
        })
    }
    
    </div>
    </div>
  )
}

export default Displayproduct