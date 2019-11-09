import React, { useState, usseEffect } from 'react';
import axios from 'axios';

function LoginForm(props) {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form>
                <input 
                    type="email" 
                    name='name'
                    placeholder='Email'
                    value={user.email}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    vale='user.password'
                />
            </form>
        </>
    )
}