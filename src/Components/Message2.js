import React, {useEffect} from 'react'


const Message2 = ({message,changeMessage}) => {
    
    
   
    useEffect(()=>{
          console.log("Componenent rerendering  Message 2 finished")
    })

    
    return (
        <div> 
          <h3> {message} </h3>
         <button type="button" onClick ={()=>{changeMessage('messsage2')}} > Get Message </button>
        </div>
    )
}

export default Message2;