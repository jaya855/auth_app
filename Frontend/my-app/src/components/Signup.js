import React, { useState } from 'react'
import { Navigate, form } from 'react-router-dom'
import './formDesign.css';
import axios from 'axios';
import Dashboard from './Dashboard';



const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value

    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      
      console.log(response.data.message);
      // alert(response.data.message);
      Navigate('/Login');
    }
    catch (error) {
      console.log(error);
      alert(error);
    }

  }

  return (
    <div className='myformdiv'>
      <div>
        <h1 className='myheading'>Enter your details to Signup</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='myform space'>
          < input
            type='text'
            name='name'
            value={formData.name}
            placeholder='Enter Your Name'
            onChange={onChangeHandle}
            className='myinput'
            required
          />

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
            Signup
          </button>

        </form>
      </div>
    </div>
  )
}

export default Signup