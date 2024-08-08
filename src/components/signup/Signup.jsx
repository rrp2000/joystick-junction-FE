import React, { useRef } from 'react'
import './signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    let navigate = useNavigate();

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const password = useRef(null);

    const signup = (e) => {
        e.preventDefault();
        const requestBody = {
            "firstName": firstName.current.value,
            "lastName": lastName.current.value,
            "email": email.current.value,
            "phone": phone.current.value,
            "password": password.current.value
        }

        axios.post("user/signup", requestBody)
            .then(res => { 
                console.log(res);
                alert(res?.data?.message)
                navigate("/") 
            })
            .catch(err => {
                alert(err?.response?.data?.message)
            })
    }

    return (
        <section className="signup__container">
            <form onSubmit={signup} className="signup__form">
                <h1 className="signup__header"><i class="uil uil-desktop"></i> Signup</h1>
                <div className="signup__form-div">
                    <label className="signup__form-tag">First Name</label>
                    <input ref={firstName} name="firstName" type="text" className="signup__form-input" placeholder='Insert first name' />
                </div>

                <div className="signup__form-div">
                    <label className="signup__form-tag">Last Name</label>
                    <input ref={lastName} name="lastName" type="text" className="signup__form-input" placeholder='Insert last name' />
                </div>

                <div className="signup__form-div">
                    <label className="signup__form-tag">Email</label>
                    <input ref={email} name="email" type="email" className="signup__form-input" placeholder='Insert your email' />
                </div>

                <div className="signup__form-div">
                    <label className="signup__form-tag">Password</label>
                    <input ref={password} name="password" type="text" className="signup__form-input" placeholder='Insert your password' />
                </div>

                <div className="signup__form-div">
                    <label className="signup__form-tag">Phone</label>
                    <input ref={phone} name="phone" type="text" className="signup__form-input" placeholder='Insert your phone number' />
                </div>

                <button className="signup__button">
                    Signup <i class="uil uil-arrow-right signup__button-icon"></i>
                </button>

                <Link className='signup__link' to="/">already Resigtered?</Link>
            </form>
        </section>
    )
}

export default Signup
