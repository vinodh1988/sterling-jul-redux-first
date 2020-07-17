 import Request from 'axios'
 const peopleAction = (people)=>{
      return{
       type: "PEOPLE_ACTION",
       data: people
      }
 }

 export const readPeopleAction= ()=>{
        return async (dispatch)=>{
            try{
              let response = await  Request.get("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people")
               dispatch(peopleAction(response.data))
           }
            catch(e){
              
                dispatch(peopleAction([]))
            }
        }
 }

 export const writePeopleAction = (person)=> {
      return async (dispatch)=>{
        try{
            await  Request.post("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people",person)
            dispatch(readPeopleAction())
        }
         catch(e){
             alert("Unable to store")
        
         }


      }
 }