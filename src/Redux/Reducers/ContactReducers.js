import { GETALLCONTACTS } from "../Types/ContactTypes";

const initialState = {
    contacts:[],
    contact:null,
    loading:true
}
 const ContactReducer= (state = initialState, { type, payload }) => {
  
    switch (type) {
      case GETALLCONTACTS:
        return{
          ...state,
          contacts:payload,
          loading:false,
        }
        
      
    
      default: return state
        
    }
  }

export default ContactReducer
