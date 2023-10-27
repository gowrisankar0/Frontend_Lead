import React from 'react'
import "./Update.css";
import {Link} from "react-router-dom"
const Update = ({ id, name, age,  adress, contact,enquiry, UpdateLead }) => {
    return (
        <div className='user'>
         <h2>
            Lead id: <span>{id}</span>
         </h2>
         <h3>
         Lead Name: <span>{name}</span>
         </h3>
         <h3>
         Lead Age: <span>{age}</span>
         </h3>
         <h3>
         Lead Adress: <span>{adress}</span>
         </h3>
         <h3>
         Lead Contact: <span>{contact}</span>
         </h3>
         <h3>
         Lead Enquiry: <span>{enquiry}</span>
         </h3>
     <div className='user_bottom'>

        {/* <Link to="/add-user"><button id={id}>Update</button></Link> */}

   {/* <button className='user_delete' onClick={UpdateLead} >Update</button> */}
   <Link to={`/update-lead/${id}`}><button className='btn'>Update</button></Link>

     </div>





        </div>
    )
}

export default Update