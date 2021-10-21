import React from 'react'
import { Link } from 'react-router-dom';

const Speciality = () => {
    return (
        <section className="dark customSec speciality">
            <div className="container">
                <div className="sectionHeading">
                    <div className="headingLeft">
                        <h2>How are we different?</h2>
                        <h3>To stay in the loop with the upcoming NFTs, join our waitlist by clicking below</h3>
                    </div>
                    <div className="headingBtn">
                        <Link to="/" className="customBtn">Join waitlist</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/authencity.svg'} alt="" />
                            <h3>AUTHENTICITY</h3>
                            <p>Colexion owns the official rights to sell the NFTs. All NFTs on our platform are digitally signed by their creator, permanently recorded, and verified. Upon purchase of NFT, the ownership rights are also transferred to the buyer immediately.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/unique.svg'} alt="" />
                            <h3>UNIQUE</h3>
                            <p>Colexion is the land of opportunities. Our platform besides being an NFT marketplace is also a gaming platform promising an advanced experience. We have also introduced the world’s first-ever 3D NFT museum of celebrities and athletes.  </p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/ownable.svg'} alt="" />
                            <h3>DIVERSITY</h3>
                            <p>Colexion offers NFTs from a variety of industries, such as sports, entertainment, art, and fashion. Exclusive NFTs such as limited-edition images, autographs, videos, artwork, etc. of all the well-known celebrities and athletes can be bought and sold in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Speciality;