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
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="http://colexion.io/assets/images/partners/polygon.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Partners;