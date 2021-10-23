import React, { useState,useEffect } from 'react'
import './Login.css'
import {useSelector,useDispatch} from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import { loginUser } from '../Redux/authAction'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({})
    
    const dispatch = useDispatch()
    
    const Submit = e => {
        e.preventDefault()
        
        const newUser = {
            email: email,
            password: password
        };
        
        loginUser(newUser,dispatch)
        
    }
    
    const myErrors = useSelector((state) => state.errors);
    const myAuth = useSelector((state) => state.auth);

    const history = useHistory();

    useEffect(() => {
        if (myErrors) {
            setErrors(myErrors);
        }
    }, [myErrors])

    useEffect(() => {
        if(myAuth.isAuthenticated){
            history.push('/')
        }
        // eslint-disable-next-line
    }, [myAuth])

    return (
        <>
            <div className="fully-center">
                <div className="photo">
                    <img src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9kb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
                <div className="infor">
                    <h2 className="text-center">Welcome Back!</h2>
                    <h4 className="text-center">Login</h4>
                    <form onSubmit={Submit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" class="form-control" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} id="Email" name="Email" aria-describedby="emailHelp" />
                        <span id="emailInvalid" className="text-danger" style={{fontSize:"12px"}}>{errors.emailnotfound}</span>
                        <span id="emailInvalid" className="text-danger" style={{fontSize:"12px"}}>{errors.email}</span>
                        </div>
                        <div class="mb-3">
                            <label for="Password" class="form-label">Password</label>
                            <input type="password" class="form-control" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} id="Password" name="Password" />
                        <span className="text-danger" style={{fontSize:"12px"}}>{errors.passwordincorrect}</span>
                        <span id="passwordInvalid" className="text-danger" style={{fontSize:"12px"}}>{errors.password}</span>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>Submit</button>
                        <p className='text-center'>Create an Account ? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
