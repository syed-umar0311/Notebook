import React, { useState } from 'react'
import {useNavigate} from 'react-router'

function Login(props) {

    const [credentails, setCredentails] = useState({email:"", password:""});
    let history = useNavigate();
    const [password, setPassword] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response =  await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentails.email, password: credentails.password})

          });
          const json = await response.json()
          console.log(json);
          if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", 'success')
            history("/",{push:true});

          }
          else{
            props.showAlert("Unvalid email and password", 'danger')

          }
    }
    const onChange = (e) => {
        setCredentails({ ...credentails, [e.target.name]: e.target.value });
      };
    
    return (
    <div>
      <div className='container_2'>
      <h2>Login To Continue</h2>
      </div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <div className='emailcenter'> <label htmlFor="email" className="form-label mx-2"><strong> Email Address</strong></label></div>
    <input type="email" className="form-control mx-3 w-60" id="email" value={credentails.email} onChange={onChange} name='email' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <div className='passwordcenter'> <label htmlFor="password" className="form-label mx-2"> <strong> Password</strong></label></div>
    <input type="password" className="form-control mx-3 w-80" value={credentails.password} onChange={onChange} name='password' id="password"/>
  </div>
  <div className='emailcenter'><button type="submit" className="btn btn-primary" >Submit</button></div>
</form>
    </div>
  )
}

export default Login
