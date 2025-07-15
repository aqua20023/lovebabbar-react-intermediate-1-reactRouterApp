import React from 'react'
import { useNavigate } from 'react-router-dom'
const Labs = () => {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('/about');
  }
  function backHandler(){
    navigate(-1);
  }
  return (
    <div>
      This is the Labs page. Here you can explore experimental features and new functionalities that are in development. We encourage you to try them out and provide feedback. Your input helps us improve and shape the future of our application. Stay tuned for updates and new experiments!
      <div>
        <button onClick={clickHandler}>Move to About Page</button>
        <button onClick={backHandler}>Move Back</button>
      </div>
    </div>
  )
}

export default Labs
