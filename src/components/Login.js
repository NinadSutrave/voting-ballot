import React, { useState } from 'react'
import './Login.css'

const Login = () => {

  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(id === process.env.REACT_APP_ADMIN_ID && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      localStorage.setItem('SECRET_TOKEN', process.env.REACT_APP_SECRET_TOKEN)
    }
    window.location.reload(false);
  }

  return (
<>
  <div className="login-wrapper">
    <h2 className="admin-heading">Admin Login</h2>
    <form action="submit" className="login-form" onSubmit={handleSubmit}>
        <label for="adminid">Admin ID</label><br/>
        <input required="required" type="text" id="adminId" name="adminId" placeholder="Enter your Admin ID" 
              onChange={(e) => setId(e.target.value)}
        /><br/><br/>

        <label for="password">Password</label><br/>
        <input required="required" type="password" id="password" name="password" placeholder="Enter your password" 
               onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
      <div className="submitButton">
        <input className="button-color" type="submit" value="Login" />
      </div>
    </form>
    </div>

    <h4>
    </h4>

    </>


  )
}

export default Login