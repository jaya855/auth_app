import React, { useState } from 'react'
import {  form, useNavigate } from 'react-router-dom'
import './formDesign.css';
import axios from 'axios';
import Dashboard from './Dashboard';
const Signup = () => {
  const navigate=useNavigate();
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
    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      console.log("err");
      console.log(response);
      navigate('/Login');
    }
    catch (error) {
      console.log(error);
      // console.log(error.response.data.message);
      alert(error.response.data.message);
    }
    setFormData({
      username:'',
      password:'',
  })

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
