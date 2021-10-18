import React from 'react'
import { Link } from 'react-router-dom';

const Speciality = () => {
    return (
        <section className="dark customSec speciality">
            <div className="container">
                <div className="sectionHeading">
                    <div className="headingLeft">
                        <h2>colexion speciality</h2>
                        <h3>The world’s first-ever virtual Art Museum starring legendary figures across<br/>Entertainment and Sports Industry, offers you the golden opportunity to know.</h3>
                    </div>
                    <div className="headingBtn">
                        <Link to="/" className="customBtn">Join waitlist</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/authencity.svg'} alt="" />
                            <h3>Authenticity</h3>
                            <p>Every digital creation on Colexin is digitally signed by the creator and permanently recorded and verified through the blockchain.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/unique.svg'} alt="" />
                            <h3>Unique</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/ownable.svg'} alt="" />
                            <h3>Ownable</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Speciality;