import React from 'react'
import { Link } from 'react-router-dom';

const Signup = (props) => {
    return (
        <div className="formWrp">
            <div className="formheader">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                <div className="close" onClick={props.data}><i className="fas fa-times"></i></div>
            </div>
            <div className="formBody">
                <h3>Sign up with colexion</h3>
                <h4>Sign up to Colexion</h4>
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
                    <div className="d-block mb-3">
                        <button type="submit" className="customBtn">Sign Up</button>
                    </div>
                    <div className="d-block">
                    Already have an account?  <Link to="/" className="link">Sign in</Link>
                    </div>
                    <div className="d-block mt-2">
                        By selecting Sign up with Google or Sign up above, I acknowledge that I have read and agree to Colexion Terms of Service and Privacy Policy in their entirety
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;