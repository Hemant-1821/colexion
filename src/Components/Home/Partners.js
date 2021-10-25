import React from 'react'
import { Link } from 'react-router-dom';

const Partners = () => {
    return (
        <section className="dark customSec partners">
            <div className="container">
                <div className="partnersBx">
                    <div className="sectionHeading justify-content-center text-center">
                        <div className="d-block">
                            <h2>Partners</h2>
                        </div>
                    </div>
                    <div className="partnersList">
                        <Link to="/">
                            <img height="70px" width="140px" src={process.env.PUBLIC_URL + '/images/partners/polygon.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/bastionex.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/payiza.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/pajson-global-holding.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/edge-coin.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/diafa.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/cineyug.png'} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/partners/AllStar.png'} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Partners;