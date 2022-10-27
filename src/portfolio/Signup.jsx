import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import validation from './validation';

const Signup = ({submitForm}) => {

    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
    })
    const [errors,setErrors]= useState({})

    const [dataiscorrect, setDataiscorrect]= useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value, })

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values))
        setDataiscorrect(true);
        
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataiscorrect){
            submitForm(true);
        }

    },[errors])
    return (
        <div className='container'>
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input type="text" className="input" value={values.fullName} name='fullName' onChange={handleChange} />
                        {errors.fullName && <p className='error'>{errors.fullName}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input type="email" className="input" value={values.email} name='email' onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' value={values.password} onChange={handleChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup