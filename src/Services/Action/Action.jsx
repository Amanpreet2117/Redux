import React from 'react'
import { ADD_TO_CART } from '../../Contants'


const addtocard=(data)=>{
 console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data,  
 

    }
        
    
}

export default addtocard
