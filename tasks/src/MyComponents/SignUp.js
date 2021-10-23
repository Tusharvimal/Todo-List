import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../Redux/authAction';
import './SignUp.css'

function SignUp() {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({})

    const history = useHistory(); 
    const dispatch = useDispatch(); 

    const Submit = e => {
        e.preventDefault()

        const newUser = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            password: password,
            address: address, 
            city: city,
            state: state,
            country: country
        };
        console.log(newUser);

        registerUser(newUser,history,dispatch)
        
    }
    const myState = useSelector((state) => (state.errors));

    useEffect(() => {
        if (myState) {
            setErrors(myState);
        }
    }, [myState])

    return (
        <>
            <div className="container mt-1">
                <form className="row g-3" onSubmit={Submit} >
                    <div className="col-sm-6">
                        <label htmlFor="Name" className="form-label ">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e)=> {
                                setName(e.target.value)
                        }} id="Name" name="Name" />
                        <span id="nameEmpty" className="text-danger" style={{fontSize:"12px"}}>{errors.name}</span>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="MobileNumber" className="form-label">Mobile Number</label>
                        <input type="number" value={mobileNumber} name="MobileNumber" onChange={(e) => {
                            setMobileNumber(e.target.value)
                        }} className="form-control" id="MobileNumber" />
                        <span id="mobileNumberEmpty" className="text-danger" style={{fontSize:"12px"}}>{errors.mobileNumber}</span>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="Email" className="form-label ">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} id="Email" name="Email" />
                        <span id="emailInvalid" className="text-danger" style={{fontSize:"12px"}}>{errors.emailInvalid}</span>
                        <span id="emailEmpty" className="text-danger" style={{fontSize:"12px"}}>{errors.email}</span>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="Password" className="form-label ">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} id="Password" name="Password" />
                        <span id="passwordInvalid" className="text-danger" style={{fontSize:"12px"}}>{errors.password}</span>
                        <span id="passwordLength" className="text-danger" style={{fontSize:"12px"}}>{errors.passwordLength}</span>
                    </div>
                    <div className="col-12">
                        <label htmlFor="Address" className="form-label ">Address</label>
                        <input type="text" className="form-control" value={address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} id="Address" name="Address" placeholder="1234 Main St" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="City" className="form-label">City</label>
                        <input type="text" className="form-control" value={city} onChange={(e) => {
                            setCity(e.target.value)
                        }} id="City" name="City" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="State" className="form-label">State</label>
                        <input type="text" className="form-control" value={state} onChange={(e) => {
                            setState(e.target.value)
                        }} id="State" name="State" />
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="Country" className="form-label">Country</label>
                        <input type="text" className="form-control" value={country} onChange={(e) => {
                            setCountry(e.target.value)
                        }} id="Country" name="Country" />
                    </div>
                    <div className="col-sm-12 mb-5">
                        <button type="submit" className="btn btn-primary" style={{ width: "100%",fontWeight:"bold" }}>SignUp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp
