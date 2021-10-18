import React from 'react'

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
            <footer>
                <div className="container">
                    <div className="footerTop">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                        <p>Colexion is all set to become the largest licensed NFT marketplace. Bringing an exquisite experience to fans and their celebrities across the globe.</p>
                        <ul className="list-inline">
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/metro-facebook.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/awesome-instagram.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/awesome-twitter.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/awesome-pinterest.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/awesome-youtube.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/awesome-linkedin.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={process.env.PUBLIC_URL + '/images/homepage/simple-discord.svg'} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=""></div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;