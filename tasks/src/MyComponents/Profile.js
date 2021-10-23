import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

function Profile() {

    const auth = useSelector(state => state.auth)

    let Name = ""
    let Email = ""
    let MobileNumber = ""
    let Address = ""
    let City = ""
    let State = ""
    let Country = ""

    if (auth.isAuthenticated) {
        Name = auth.user.name
        Email = auth.user.email
        MobileNumber = auth.user.mobileNumber
        Address = auth.user.address
        City = auth.user.city
        State = auth.user.state
        Country = auth.user.country
    }
    else {
        Name = ""
        Email = ""
        MobileNumber = ""
        Address = ""
        City = ""
        State = ""
        Country = ""
    }

    return (
        <>
            <div className="container border border primary mt-3">
                <div className="container pic">
                    <img className="profilePic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
                </div>
                <div className="container info">
                    <div className="container personalInfo">
                        <h5>Name - {Name}</h5>
                        <h5>Email - {Email}</h5>
                        <h5>MobileNumber - {MobileNumber}</h5>
                    </div>
                    <div className="container location">
                        {Address ? <h5>Address - {Address} </h5> : <h5>Address - Not Filled</h5>}
                        {City ? <h5>City - {City} </h5> : <h5>City - Not Filled</h5>}
                        {State ? <h5>State - {State} </h5> : <h5>State - Not Filled</h5>}
                        {Country ? <h5>Country - {Country} </h5> : <h5>Country - Not Filled</h5>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
