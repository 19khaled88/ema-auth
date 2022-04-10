import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'


export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError]=useState('');
  const [itemloading, setItemLoading] = useState('');
  
  
  const [createUserWithEmailAndPassword,
    user,
    loading,
    hookError,] = useCreateUserWithEmailAndPassword(auth)
  const navigate = useNavigate()

  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }
  const confirmPassHandler=(event)=>{
    setConfirmPass(event.target.value)
  }
  if(user){
    navigate("/")
  }
  if(hookError){

  }
  if(loading){
    
  }
  
  const submitForm=(event)=>{
    event.preventDefault()
    if(password !== confirmPass){
      setError('password not match')
    }
    if(password.length < 6){
      setError('Password must be at least 6 characters, or letter')
    }
    createUserWithEmailAndPassword(email, password)
    
  }
  
  
  useEffect(()=>{
   const timer = setTimeout(()=>{
      setError('')
    },3000);
    return ()=>clearTimeout(timer);
  },[error]);


  return <div className="form-container">
  <div>
    <h4 className="form-title">Sign Up Page</h4>
    <form onSubmit={submitForm}>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input onBlur={emailHandler} type="email" name="email" id="" required/>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input onBlur={passwordHandler} type="password" name="password" id="" required/>
      </div>
      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input onBlur={confirmPassHandler} type="password" name="confirm-password" id="" required/>
      </div>
      <p style={{color:'red'}}>{error}</p>
      <p>{itemloading}</p>
      <input className="form-submit" type="submit" value="Sign Up" />
    </form>

    <p>
      Already have account?
      <Link className="form-link" to="/login">
        Login
      </Link>
    </p>
  </div>
</div>
}
