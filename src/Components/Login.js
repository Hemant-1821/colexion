import React,{useState} from 'react'
import { Link } from 'react-router-dom';
//import { useState } from 'react/cjs/react.development';
import Signup from './Signup';

const Login = (props) => {
    const [signModal, setSignModal] = useState(false)
    const signModalHandler = e => {
        e.preventDefault();
        setSignModal(!signModal);
        //loginModal(false)
        //setLoginModal(false)
    }
    //console.log(props)
    return (
        <React.Fragment>
        <div className="formWrp">
            <div className="formheader">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                <div className="close" onClick={props.click}><i className="fas fa-times"></i></div>
            </div>
            <div className="formBody">
                <h3>Welcome Back</h3>
                <h4>Sign in to Colexion</h4>
                <div className="d-block mb-3">
                    <Link className="blueBtn fullWidth">
                        <img src={process.env.PUBLIC_URL + '/images/google.png'} alt="" />
                        <span>Login With Google</span>
                    </Link>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    <div className="d-block">
                        <Link to="/" className="link">Forgot Password?</Link>
                    </div>
                    <div className="d-block mt-3 mb-3">
                        <button type="submit" className="customBtn">Sign In</button>
                    </div>
                    <div className="d-block">
                        Don't have an account? <Link to="/" className="link" onClick={signModalHandler}>Register Here</Link>
                    </div>
                </form>
            </div>
        </div>
        {
            signModal
            ?
            <div className="modalPopUp">
                <div className="modalInr">
                    <Signup data={signModalHandler}/>
                </div>
            </div>
            :
            null
        }
        </React.Fragment>
    )
}
export default Login;