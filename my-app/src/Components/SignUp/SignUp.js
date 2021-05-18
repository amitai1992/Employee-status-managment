import React, { useState } from 'react';
import { signUser } from '../../Services/Service';

import './SignUp.css';

export default function SignUp(props) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [status, setStatus] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        let user = { _id: email, status: status, name: name }
        const res = signUser(user);
        if (res) {
            props.setToken(user);
        }
        else {
            alert('faild');
        }
    }


    return (
        <div className='container'>
            <div className='my-div'>
                <form className='my-form' onSubmit={handleSubmit}>
                    <h3 className='my-headline'>Sign Up</h3>

                    <div className="inner">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name"
                            onChange={e => setName(e.target.value)} required />
                    </div>

                    <div className="inner">
                        <label>Status</label>
                        <input type="text" className="form-control" placeholder="Status"
                            onChange={e => setStatus(e.target.value)} required />
                    </div>

                    <div className="inner">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className='inner'>
                    <button type="submit" className="btn btn-primary btn-block my-btn">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
                    </p>
                    </div>
                </form>
            </div>
        </div>
    )
}