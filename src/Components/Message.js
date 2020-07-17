import React, {useEffect} from 'react'


const Message = ({message,changeMessage}) => {
    
    
   
    useEffect(()=>{
          console.log("Componenent rerendering finished")
    })

  
    
    return (
        <div> 
          <h3> {message} </h3>
         <button type="button" onClick ={()=>changeMessage('message1')} > Get Message </button>
        </div>
    )
}

export default Message;