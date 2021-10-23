import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../Redux/authAction';

function Header() {

    const [errors, setErrors] = useState("")

    const myAuth = useSelector((state) => state.auth)
    const myErrors = useSelector((state) => state.errors);

    let Name = ""

    if (myAuth.isAuthenticated) {
        Name = myAuth.user.name
    }
    else{
        Name = "";
    }


    const dispatch = useDispatch();

    const logout = e => {
        e.preventDefault()
        logoutUser(dispatch)
    }

    useEffect(() => {
        if (myErrors) {
            setErrors(myErrors);
        }
    }, [myErrors])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {Name ? <Link className="navbar-brand" to="/"> Hi {Name} </Link> : <Link className="navbar-brand" to="/"> Hi Guest </Link>}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            { (Name) ?
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                { (Name) ?
                                    <li>
                                    <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                                    </li>
                                    :
                                    <li>
                                    <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                }
                                <li>
                                    <Link className="nav-link" to="/signup">SignUp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
