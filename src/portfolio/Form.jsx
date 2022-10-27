import React from 'react'
import { useState } from 'react'
import Signup from './Signup'
import Signupformsuccess from './Signupformsuccess'
const Form = () => {
  const [formIsSubmitted, setFormIsSumitted]= useState(false);
  const submitForm =()=>{
    setFormIsSumitted(true);

  }
  return (
    <div>
        {!formIsSubmitted ? ( <Signup submitForm={submitForm}/>  ) : ( <Signupformsuccess/>) }

    </div>
  )
}

export default Form