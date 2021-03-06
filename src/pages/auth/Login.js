import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        
    }
    
    return (
        <div className="container p-5">
            <div className="row p-5">
                <h4>Login</h4>
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
                </form>
            </div>
        </div>
    )
}

export default Login;