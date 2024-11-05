import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    // State to hold form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Create an object with the form data
        const formData = {
            email: email,
            password: password,
        };

        // Log data to the console
        console.log('Login Data:', formData);

        // Save data to local storage
        localStorage.setItem('loginData', JSON.stringify(formData));

        // Optionally, clear the form fields after submission
        setEmail('');
        setPassword('');
        navigate('/')
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Sign In</h2>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-warning rounded-0 w-100">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
