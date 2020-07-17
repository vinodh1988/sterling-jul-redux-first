/* 

  In Redux, reducer is a function which return an object like {..}

*/

export const firstReducer = (state={message : "World is So Big!!!"},action) => {
    switch(action.type){
         case "MESSAGE_ACTION":
                    return {message: action.data}
         default:
                    return state;
    
   }
}

export const secondReducer = (state={message : "World is So Small!!"},action) => {
    switch(action.type){
         case "SECOND_ACTION":
                    return {message: action.data}
         default:
                    return state;
    
   }
}
