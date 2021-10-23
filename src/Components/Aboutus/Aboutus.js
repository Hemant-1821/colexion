import React from 'react';
import Partners from '../Home/Partners';
import Press from '../Home/Press';
import Teams from '../Teams';
import './Aboutus.css';
import Roadmap from './Roadmap/Roadmap';

const Aboutus = () => {
    return(
        <div className="aboutus">
            <div className="container">
                <div className="aboutus-videoFrame">
                    <div className="videoBx">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className="aboutus-rectangle">ABOUT US</div>
                </div>
                <div className="">
                    <div className="Head">About Colexion</div>
                    <div className="row">
                        <div className="col-6 content left-col">
                            Colexion is the world's largest licensed NFT marketplace, offering digital artists a new path for bridging the gap between traditional art markets and the emerging non-fungible token market. Non-fungible tokens are cryptographic tokens that have unique properties encoded in the NFT issuing smart contract, or they are programmed as part of the NFT configuration before issuance. With the same technology, we have developed an exclusive NFT platform where you can create, buy, and sell NFTs at incredible prices.
                        </div>
                        <div className="col-6 content right-col">
                            We also offer diversity by providing multiple industries NFTs including Art, Entertainment, Lifestyle, Fashion and Sports.
                            Colexion is the diamond den for millions of fans worldwide who are raving to find the exclusive or premium moments of their favorite celebrities. We feature Hollywood, Bollywood, Cricket, Football and many other industry stars and their outstanding recognition and awards in each section. Discover the most desirable NFTs. 
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="Head">Authenticity with 100% Originality</div>
                    <div className="row">
                        <div className="col-6 content left-col">
                            Colexion owns the official rights to sell the NFTs on our digital marketplace. Upon purchase of NFT, the ownership rights are also transferred to sellers immediately.
                        </div>
                        <div className="col-6 content right-col">
                            With Smart contracts on NFTs encode terms and conditions, rights and ownership, Ethereum keeps track of your ownership record with its secure blockchain. Therefore, we guarantee 100% authenticity and originality.
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="Head">No Cryptocurrency? No Problem</div>
                    <div className="row">
                        <div className="col-12 content ml-4 mt-4 pr-3">
                            Whenever you wish to buy NFT at Colexion but don’t have cryptocurrency then you can use CLXN (Colexion Native Token) and your national currency (INR, USD) to purchase the same. At Colexion, we aim to provide access to the new and emerging digital revolution.  
                        </div>
                    </div>
                </div>
                <div className="Rectangle-numbers d-flex justify-content-around mb-2">
                    <div className="">
                        <div className="number">1200+</div>
                        <div className="label">NFTS</div>
                    </div>
                    <div className="">
                        <div className="number">200+</div>
                        <div className="label">CELEBRITIES</div>
                    </div>
                    <div className="">
                        <div className="number">85+</div>
                        <div className="label">COUNTRIES</div>
                    </div>
                </div>
                <Teams />
                <Partners/>
 

                <div className="Roadmap">
                    <div className="Roadmap-head">ROADMAP</div>
                    <Roadmap />
                </div>

                <div className="join-us">
                    <div className="join-us-head">JOIN US</div>
                    <div className="row justify-content-center">
                        <div className="join-us-content">Are you passionate about empowering a generation of digital creatives? Join our world class team of former founders and product, engineering and growth leaders.</div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-5">
                        <button className="join-us-button">JOIN US</button>
                    </div>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/joinus.png'} height="50%" width="100%" className="joinus-img"/>
                </div>

                <div>
                    <Press/>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;