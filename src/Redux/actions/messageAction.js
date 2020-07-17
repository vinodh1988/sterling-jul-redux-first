/* 
An action is method usually called by using a redux function called dispatch
and it usuall returns an object
and every action always triggers all the reducers to execute */

export const messageAction = (source) => {
    let messages = ["Hey!!World!!!", "Javascript is tricky", "React is Extremely Good!","Earth is big",
"Sun is a star", "Moon is a satillite"]
   if(source === "message1") 
    return {
        type: "MESSAGE_ACTION",
        data : messages[Math.round(Math.random()*5)]
    }

    else
    return {
        type: "SECOND_ACTION",
        data : messages[Math.round(Math.random()*5)]
    }
}

