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
            </section>
        </React.Fragment>
    )
}
export default HomeBanner;