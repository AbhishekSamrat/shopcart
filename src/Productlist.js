import React, { useContext } from 'react'

import image1 from './images/cheese.png'
import image2 from './images/curd.png'
import image3 from './images/ghee.png'
import image4 from './images/lassi.png'
import image5 from './images/milk.png'
import image6 from './images/o1.jpg'
import image7 from './images/o3.jpg'
import image8 from './images/olive.jpg'
import { shop } from './Cartbag'




const Productlist = () => {
    

    const {addedcart,state} = useContext(shop)
    const products = [
        {
            name : 'Cheese',
            image: image1,
            price : 1400,
            id : 1
        },
        {
            name : 'Curd',
            image: image2,
            price : 300,
            id : 2
        },
        {
            name : 'Ghee',
            image: image3,
            price :700,
            id : 3
        },
        {
            name : 'Lassi',
            image: image4,
            price : 400,
            id : 4
        },
        {
            name : 'Oil',
            image: image5,
            price : 500,
            id : 5
        },
        {
            name : 'Mustard Oil',
            image: image6,
            price : 350,
            id : 6
        },
        {
            name : ' Til Oil',
            image: image7,
            price : 1500,
            id : 7
        },
        {
            name : ' Olive Oil',
            image: image8,
            price : 1900,
            id : 8
        }
      
    
    ]
  return (
    
    <div className='flex flex-wrap ml-20 text-center' >
   
    
   
    {
        products.map((el,id)=>{
           
   
         return(
            <div className='bg-neutral-300 w-72  mt-5 mx-5 text-center px-5 py-5 flex1' key={id} style={{borderRadius:"50px"}}>
            <div className='imgg'>
            <img  src={el.image}    />
            <p>Product Name - {el.name}</p>
            <span> Price - {el.price}</span><br></br>
            <button className='bg-blue-400 p-2' onClick={()=>addedcart(el)} >Add To Cart</button>
            </div>
        
        
            </div>
            
         )
        })
    }

    
    
    </div>
  )
}

export default Productlist