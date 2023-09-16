import React from 'react';
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";

function Login () {

    const [user, setUser] = useState({username: '', password: ''});
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

       authMethods.logIn(user)
            .then((tokenObject) =>{
                storeToken(tokenObject.authToken)
                authenticateUser()
                navigate("/")
            } )
            .catch(err => console.error(err))
    }



    return (
        
            <form onSubmit={handleSubmit} className="loginForm">
                <div>
                    <h1>Login</h1> 
                    <label>Username</label>
                    <br />
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" value={user.password}  onChange={handleChange} />
                    <br />
                    <p>If you don't have an account yet, you can create your account <Link to={'/signup'}>here</Link> </p>
                </div>
            

        <button type="submit" onSubmit={handleSubmit}>Login </button>
    
        
        </form>
        
    );

};



export default Login;