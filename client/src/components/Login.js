import React, { useState, usseEffect } from 'react';
import { axiosWithoutAuth as axios }from '../utils/axiosAuth';

export default function Login(props) {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChanges = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios()
        .post('/api/login', user)
        .then(res => {
          console.log(res.data)
          localStorage.setItem("token", res.data.payload);
          props.history.push('/bubbles');
        })
        .catch(err => {
          return err.response
        })
      resetForm();
    }
  
    const resetForm = () => {
      setUser({
        username: '',
        password: ''
      })
    }
  
    return (
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <hr />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={user.username}
            onChange={handleChanges}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChanges}
            required
          />
          <button  type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }