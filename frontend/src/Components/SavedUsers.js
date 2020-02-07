import React from 'react';
import API from "../utils/axiosWithAuth"


function SavedUsers() {
    const handleSubmit = event => {
      event.preventDefault()
      
      //delete will delete user login credentials upon clicking on unsubscribe
    API()
      .get("/users")
      .then(res => {
        console.log(res)
        res.send().json(res)
      })
      .catch(err => console.log(err))
    };
  
    return (
      
        <div>
          <button onClick={handleSubmit}>Handle Submit</button>
        </div>
    );
  }
  
  export default SavedUsers;