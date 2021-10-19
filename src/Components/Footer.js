import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <section className="dark subscribe">
                <div className="container">
                    <div className="subscribeBx">
                        <div className="sectionHeading justify-content-center text-center">
                            <div className="d-block">
                                <h2>stay tune stay connected</h2>
                            </div>
                        </div>
                        <div className="subscribeForm">
                            <form>
                                <input type="text" name="" value="" placeholder="Enter Email Address"/>
                                <button type="submit">subscribe now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="mainFooter">
                <div className="container">
                    <div className="footerTop">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                        <p>Colexion is all set to become the largest licensed NFT marketplace. Bringing an exquisite experience to fans and their celebrities across the globe.</p>
                        <ul className="list-inline">
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/metro-facebook.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/awesome-instagram.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/awesome-twitter.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/awesome-pinterest.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/awesome-youtube.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/awesome-linkedin.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/social/simple-discord.svg'} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footerBottom">
                        <ul className="list-inline">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Terms of Use</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Help Center</Link></li>
                        </ul>
                        <ul className="list-inline footerDetails">
                            <li>
                                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/homepage/social/material-location-on.svg'} alt="" /><span>Colexion, World Trade Company U.A.E</span></Link>
                            </li>
                            <li>
                                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/homepage/social/material-email.svg'} alt="" /><span>info@colexion.io</span></Link>
                            </li>
                            <li><Link to="/" className="lineBtn">join community</Link></li>
                        </ul>
                    </div>
                    <div className="copyRIght">© 2021 Colexion. All Rights Reserved.</div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;