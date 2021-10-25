import React from 'react'
import { Link } from 'react-router-dom';
import Updates from './Updates';

const HomeBanner = () => {
    return (
        <React.Fragment>
            <section className="homeBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="bannerContent">
                                <h3>INFINITY BEGINS HERE</h3>
                                <h1>OWN PRIME NFTs COLLECTION</h1>
                                <h2>Buy, Collect and Trade officially licensed digital collectibles.</h2>
                                <Link to="/" className="customBtn">Join waitlist</Link>
                                <div className="counterNum">
                                    <ul>
                                        <li>
                                            <h4>1200+</h4>
                                            <h5>NFTS</h5>
                                        </li>
                                        <li>
                                            <h4>200+</h4>
                                            <h5>Celebrities</h5>
                                        </li>
                                        <li>
                                            <h4>85+</h4>
                                            <h5>Countries</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Updates />
                <div className="bannerImg">
                    <div className="bannerImgAnimation">
                        <img src={process.env.PUBLIC_URL + '/images/homepage/infinite.svg'} alt="" />
                    </div>
                    {/* <div className="bannerImgFlash">
                        <img src={process.env.PUBLIC_URL + '/images/rays.svg'} alt="" className="bannerRays" />
                    </div>  */}
                </div>
                <div className="bannerSocial">
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
                        {/* <li>
                            <a href="/">
                                <img src={process.env.PUBLIC_URL + '/images/homepage/social/telegram.png'} alt="" />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}
export default HomeBanner;