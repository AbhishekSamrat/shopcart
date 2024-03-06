import React from 'react'

const Checkout = () => {
    const out =()=>{
        alert("Your Record Is Submited")
    }
  return (
    <div className='w-400 h-auto m-auto  text-center'> <span className='bg-blue-600 text-white p-2' style={{fontFamily:'fantasy'}}>Checkout Form</span>
    
    <fieldset>
    <label>
    Name : <input type='text' placeholder='write your name..' required  style={{border:"1px solid black",margin:"5px",padding:"10px"}}></input>
  
    </label>
    <label>
    Shipping address : <input type='text' placeholder='write your address..' required  style={{border:"1px solid black",margin:"5px"}}></input>
  
    </label>
    <label>
    Date : <input type='date' required  style={{border:"1px solid black",margin:"5px"}}></input>
  
    </label>
    <br></br>
    <label>
    Price : ₹<input type='number' required style={{border:"1px solid black",margin:"5px"}}></input>
  
    </label>
    <label>
    Your Email : <input type='email' required style={{border:"1px solid black",margin:"5px"}}></input>
  
    </label>
    <label>
    Contact : <input type='number' required style={{border:"1px solid black",margin:"5px"}}></input>
  
    </label>
    </fieldset>
    <button className='text-center bg-slate-950 text-white p-2' onClick={()=>out()}>Submit</button>
    
    </div>

    
  )
}

export default Checkout