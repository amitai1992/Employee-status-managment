
import React, { useState } from 'react';
import { loginUser } from '../../Services/Service';
import './Login.css';

export default function Login(props) {
    const [userEmail, setUserEmail] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        let token = await loginUser({ userEmail });
        if (token) { // if the user has been found then update token
            props.setToken(token);
        }
        else {
            alert('somthing went wrong');
        }
    }

    return (
        <div className='container'>
            <div className='my-div'>
                <form className='my-form' onSubmit={handleSubmit}>
                    <h3 className='my-headline'>Sign In</h3>
                    <div className="inner">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => { setUserEmail(e.target.value) }} />
                    </div>
                    <div className="inner">
                        <button type="submit" className="btn btn-primary my-btn">Login</button>
                        <p className="text-right">
                            doesnt have an account?  <a href="/signup">Signup?</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}