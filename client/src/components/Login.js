import React, { useState, usseEffect } from 'react';
import axios from 'axios';

function Login(props) {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    usseEffect(() => {
      axios
        .get(`http://localhost:5000/api/login/${props.match.params.id}`)
        .then(res => {
          console.log(res)
        })
    })

    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    const handleSubmit = (e) => {
      e.preventDefault();
        axios
        .put(`http://localhost:5000/api/login/${user.id}`, user)
        .then(res => {
            
        })
        .catch(err => {
            console.log(err)
        })

    }
    }
    return (
        <>
            <h1>Welcome to the Bubble Page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name='name'
                    placeholder='Email'
                    value={user.email}
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    vale={user.password}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export default Login;