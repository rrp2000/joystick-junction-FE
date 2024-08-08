import React, { useRef } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null)

    const login = (e) =>{
      e.preventDefault();
      const requestBody = {
        "email": email.current.value,
        "password": password.current.value
      }

      axios.post("user/login",requestBody)
      .then(res => {
        localStorage.setItem("token", res?.data?.payload?.jwt);
        localStorage.setItem("userDetails", JSON.stringify(res?.data?.payload?.userDetails));
        navigate("/home");
      })
      .catch(err => {
        alert(err?.response?.data?.message)
      })
      console.log(requestBody);
    }
  return (
    <section className="login__container">
    <form onSubmit={login} className="login__form">
        <h1 className="login__header"><i class="uil uil-desktop"></i> login</h1>
        <div className="login__form-div">
            <label className="login__form-tag">Email</label>
            <input ref={email} name="email" type="email" className="login__form-input" placeholder='Insert your email' />
        </div>

        <div className="login__form-div">
            <label className="login__form-tag">Password</label>
            <input ref={password} name="password" type="text" className="login__form-input" placeholder='Insert your password' />
        </div>


        <button className="login__button">
            login <i class="uil uil-arrow-right login__button-icon"></i>
        </button>
        <Link className='login__link' to= "/signup">Not Registered?</Link>
    </form>
</section>
  )
}

export default Login
