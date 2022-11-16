import React from 'react'
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import Loginservice from '../../service'
function Login() {
const [login, setLog] = useState(" ");
 const handleSubmit = async (e) =>{
  e.preventDeafault();
 
 const logs = {
  login,
 }

 try{
  await Loginservice.addLogin(logs)
 window.alert("login successfully")
 }catch(err){
  console.log(err);
 }
 }
  return (
    <>
    
      <div className="container m-5 col-md-6 bg-dark text-white p-5 rounded shadow-s">
       
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>
          <div className="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            className="form-control" 
            id="exampleInputEmail1"
             aria-describedby="emailHelp" 
             placeholder="Enter email" 
             onChange={(e) => setLog(e.target.value)}/>
            <small id="emailHelp" className="form-text text-primary">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" 
            className="form-control"
             id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setLog(e.target.value)} />
          </div>
          <div className="curser-pointer">
            Forget password? </div>
          <button type="submit" className="btn btn-primary m-2">login</button>
          <NavLink to="/register/">Register</NavLink>
        </form>
      </div>
    </>

  )


}

export default Login;
