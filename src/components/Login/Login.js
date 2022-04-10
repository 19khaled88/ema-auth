import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
export const Login = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [wrong, setWrong] = useState('')
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let err;
  let load;
   if(user){
    navigate('/')
   }

   if(error){
    err = (error?.message)
   }
   if (loading) {
    load = 'Loading...'
  }

  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }
  const submitForm=(event)=>{
    event.preventDefault()
    if(password.length < 6){
      setWrong('password characters must be at least 6')
    }
    signInWithEmailAndPassword(email, password)
  }
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Login Page</h4>
        <form onSubmit={submitForm}> 
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={emailHandler} type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={passwordHandler} type="password" name="password" id="" />
          </div>
          <p>{err}</p>
          <p>{load}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>

        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>
    </div>
  )
}
