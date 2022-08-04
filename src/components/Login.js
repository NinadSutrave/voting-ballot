import React from 'react'
import './Login.css'

const Login = () => {
  return (
<>
  <div className="login-wrapper">
    <h2 className="heading">Admin Login</h2>
    <form action="submit" className="login-form">
        <label for="pehchaanid">Pehchaan ID</label><br/>
        <input required="required" type="text" id="pehchaanID" name="pehchaanID" placeholder="Enter your Pehchaan ID" /><br/><br/>

        <label for="password">Password</label><br/>
        <input required="required" type="password" id="password" name="password" placeholder="Enter your password" /><br/><br/>
      <div className="submitButton">
        <input type="submit" value="Login" />
      </div>
    </form>
    </div>

    <h4>
    </h4>

    </>


  )
}

export default Login