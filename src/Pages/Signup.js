import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    // State to hold form data
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // Create an object with the form data
        const formData = {
            username: username,
            email: email,
            password: password,
        };

        // Log data to the console
        console.log('Form Data:', formData);

        // Save data to local storage
        localStorage.setItem('signupData', JSON.stringify(formData));

        // Optionally, clear the form fields after submission
        setUsername('');
        setEmail('');
        setPassword('');

        navigate('/login')
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Sign Up</h2>

                    <div className="mb-2">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

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

                    <button type="submit" className="btn btn-warning rounded-0 w-100">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
