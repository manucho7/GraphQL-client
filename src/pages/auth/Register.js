import React,{ useState } from 'react';
import {auth} from '../../firebase';

const Register = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        const config = {
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }
        await auth.sendSignInLinkToEmail(email, config);

        window.localStorage.setItem('emailFormRegistration', email);
        setEmail('');
        setLoading('');
    }

    return (
        <div className="container p-5">
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email Address</label>

                    <input className="form-control" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        disabled={loading}
                    />

                </div>
                <button className="btn btn-raised btn-primary" disabled={!email || loading}>Submit</button>
            </form>
        </div>
    )
}

export default Register;