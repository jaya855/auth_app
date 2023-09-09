import React, { useState } from 'react'
import { form } from 'react-router-dom'
import './formDesign.css';

const Login = () => {
  const [formData,setFormData]=useState({email:'',password:'',});
  const onChangeHandle=(e)=>{
       const {value,name} = e.target;
        setFormData((prevData)=>({
        ...prevData,
        [name]:value
        
       }));
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(formData);
  }
  return (
    <div className='myformdiv'>
      <div>
      <h1 className='myheading'>Enter your credentials to login</h1>
      </div>
      <div>
       <form onSubmit={handleSubmit} className='myform'>
       < input
       type='email'
       name='email'
       value={formData.email}
       placeholder='Enter Your Email'
       onChange={onChangeHandle}
       className='myinput'
       required
       />
       < input
       type='password'
       name='password'
       placeholder='Enter Your Password'
       onChange={onChangeHandle}
       value={formData.password}
       className='myinput'
       required
       />
       <button type='submit' className='mybtn'>
        Login
       </button>

       </form>
       </div>
    </div>
  )
}

export default Login
