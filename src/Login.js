import React, { useState } from 'react';
import "./Login.css";
import {Link,useHistory} from "react-router-dom";
import {auth} from "./Firebase";

function Login(){
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();


    const login=(event)=>{
      event.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then((auth)=>{
           

        history.push("/");
      })
      .catch((e)=>alert(e.message));
    }

    const register=(event)=>{
      event.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          
        })
        .catch((e)=>alert(e.message));

    }


    

    return(
        <div className="login">
             <Link to="/">
               <img
                 className="login__logo" 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                   alt="error"
                  />
             </Link>
           
            
             <div className="login__container">
                 <h1> Sign In</h1>
                 <form >
                  <h5>Email</h5>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <h5>Password</h5>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                  <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                  <p>
                      By Signing in you agree to Amazon's Conditions of Use & Sale. Please see our Policy Note,our Cokkies Notice and our interset-Based Ads Notice
                  </p>
                  <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
                </form>
             </div>
             
        </div>
    )
}

export default Login;