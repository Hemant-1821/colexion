import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';


const Nav = () => {
    const [switcher, setSwitcher] = useState(true);
    const [loginModal, setLoginModal] = useState(false);
    const loginModalHandler = e => {
        e.preventDefault();
        setLoginModal(!loginModal);
    }
    const darkColorSwitcher = (e) => {
        e.preventDefault();
        setSwitcher(!switcher)
        console.log(switcher)
        localStorage.setItem('theme', 'white');
    }
    const whiteColorSwitcher = (e) => {
        e.preventDefault();
        setSwitcher(!switcher)
        console.log(switcher)
        localStorage.setItem('theme', 'dark');
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg" id="myNav">
                <div className="container">
                <Link to="/" className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" /></Link> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <span>Coming Soon</span>
                                Marketplace
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <span>Coming Soon</span>
                                Museum
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link customBtn" to="/">Join Waitlist</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={loginModalHandler} className="nav-link" to="/">Sign in</Link>
                        </li>
                        <li className="nav-item colorSwitcher">
                            {
                                switcher ?
                                <Link className="nav-link" to="/" onClick={darkColorSwitcher}>
                                    <img src={process.env.PUBLIC_URL + '/images/color-switch-dark.png'} alt="" />
                                </Link>
                                :
                                <Link className="nav-link" to="/" onClick={whiteColorSwitcher}>
                                    <img src={process.env.PUBLIC_URL + '/images/color-switch-white.png'} alt="" />
                                </Link> 
                            }
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            {
                loginModal
                ?
                <div className="modalPopUp">
                    <div className="modalInr">
                        <Login click={loginModalHandler} />
                    </div>
                </div>
                :
                null
            }
        </React.Fragment>
    )
}


export default Nav
