import React, { useEffect, useState } from 'react'
import "../CSS-Files/Login.css"
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useStateValue } from '../StateProvider';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [{ basket },dispatch] = useStateValue();
  

  const login = event => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        // console.log("&&&&&");
        // console.log(userCredential)
        navigate("/");
      })
      .catch(e => alert(e.message))
  }

  const register = event => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
      .then(userCredential => {
        navigate("/");
      })
      .catch(e => alert(e.message))
  }

  return (
    <div className='login'>
        <Link to="/">
          <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png'
          />
        </Link> 
        <div className='login__container'>
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event =>setEmail(event.target.value)} type="email"/>
            <h5>Password</h5>
            <input value={password} onChange={event =>setpassword(event.target.value)} type="password"/>
            <button onClick={login} type="submit" className='login__signinButton'>Sign In</button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
          </form>
        </div>
    </div>
  )
}

export default Login
