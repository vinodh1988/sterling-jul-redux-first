import React from 'react'

const Message = ({message,changeMessage}) => {

    return (
        <div>
          <h3> {message} </h3>
         <button type="button" onClick ={changeMessage} > Get Message </button>
        </div>
    )
}

export default Message;