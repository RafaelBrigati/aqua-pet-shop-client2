import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authMethods from "../services/auth.service"

const SignupPage = () => {
    const [user, setUser] = useState({username: '', password: '', email: '', });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 
        
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       console.log('user', user);
        authMethods.signUp(user)
            .then(() => navigate('/login')) 

            .catch(err => console.error(err))
        
    }
  return (
    
                <form onSubmit={handleSubmit} className="signUpForm">
                    <div>
                        <h1>Sign up</h1> 
                        
                        <label>Username</label>
                        <br />
                        <input type="text" name="username" value={user.username} onChange={handleChange} />
                        <br />

                        <label>E-mail</label>
                        <br />
                        <input type="text" name="email" value={user.email} onChange={handleChange} />
                        <br />

                        <label>Password</label>
                        <br />
                        <input type="password" name="password" value={user.password}  onChange={handleChange} />
                        <br />
                        
                    </div>

                    
                            <button type="submit" onSubmit={handleSubmit} ><b>Register</b></button>
                       
                  
                </form>
            
  
  )
}

export default SignupPage