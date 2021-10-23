import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';


const Nav = (props) => {
    //const [switcher, setSwitcher] = useState(true);
    const [loginModal, setLoginModal] = useState(false);
    const [activeClass, setActiveClass] = useState(false)
    const loginModalHandler = e => {
        e.preventDefault();
        setLoginModal(!loginModal);
    }
    
    useEffect(() => {
        
    }, [])
    const mobileToggle = () => {
        setActiveClass(!activeClass)
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg" id="myNav">
                <div className="container">
                <Link to="/" className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" /></Link> 
                <button className="navbar-toggler" id="moblieToggle" onClick={mobileToggle}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={activeClass?"collapse navbar-collapse active":"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
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
                            {/* {
                                switcher ?
                                <Link className="nav-link" to="/" onClick={darkColorSwitcher}>
                                    <img src={process.env.PUBLIC_URL + '/images/color-switch-dark.png'} alt="" />
                                </Link>
                                :
                                <Link className="nav-link" to="/" onClick={whiteColorSwitcher}>
                                    <img src={process.env.PUBLIC_URL + '/images/color-switch-white.png'} alt="" />
                                </Link> 
                            } */}
                            <Link className="nav-link" to="/" onClick={props.click}>
                                <img src={process.env.PUBLIC_URL + '/images/color-switch-white.png'} alt="" />
                            </Link> 
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
