import axios from'axios'
import { GETALLCONTACTS } from '../Types/ContactTypes'
export  const  GetContacts= ()=>async(dispatch)=>{
    try {
        
        const res = await axios
        .get ('/api/contacts/allcontacts')
        dispatch({
            type:GETALLCONTACTS,
            payload: res.data.contacts
        })
    } catch (error) { console.log(error)
        
    }
    
}
