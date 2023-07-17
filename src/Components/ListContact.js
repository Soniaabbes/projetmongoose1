import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{GetContacts} from '../Redux/Action/ContactAction'

import Contact from './Contact'

function ListContact() {
  const LesContactes= useSelector((state)=>state.ContactReducer.contacts)
  console.log(LesContactes)
  const dispatch=useDispatch();
 
  useEffect(()=>{dispatch(GetContacts())},[dispatch])
   return (
    <div>
     {LesContactes.map((contacte)=><Contact contacte={contacte} key={contacte._id}/>)}
    </div>
  )
}

export default ListContact