import React, {useEffect} from 'react';
import Partners from '../Home/Partners';
import Press from '../Home/Press';
import Teams from '../Teams';
import './Aboutus.css';
import Roadmap from './Roadmap/Roadmap';

const Aboutus = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                    <h2 className="Head">About Colexion</h2>
                    <div className="row">
                        <div className="col-md-6 content left-col">
                            Colexion is the world's largest licensed NFT marketplace, offering digital artists a new path for bridging the gap between traditional art markets and the emerging non-fungible token market. Non-fungible tokens are cryptographic tokens that have unique properties encoded in the NFT issuing smart contract, or they are programmed as part of the NFT configuration before issuance. With the same technology, we have developed an exclusive NFT platform where you can create, buy, and
                        </div>
                        <div className="col-md-6 content right-col">
                            <p className="mb-0">sell NFTs at incredible prices.</p>
                            <p>We also offer diversity by providing multiple industries NFTs including Art, Entertainment, Lifestyle, Fashion and Sports.
                            Colexion is the diamond den for millions of fans worldwide who are raving to find the exclusive or premium moments of their favorite celebrities. We feature Hollywood, Bollywood, Cricket, Football and many other industry stars and their outstanding recognition and awards in each section. Discover the most desirable NFTs.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="Head">Authenticity with 100% Originality</h2>
                    <div className="row">
                        <div className="col-md-6 content left-col">
                            Colexion owns the official rights to sell the NFTs on our digital marketplace. Upon purchase of NFT, the ownership rights are also transferred to sellers immediately.
                            <p className="m-0">With Smart contracts on NFTs encode terms and</p>
                        </div>
                        <div className="col-md-6 content right-col">
                        conditions, rights and ownership, Ethereum keeps track of your ownership record with its secure blockchain. Therefore, we guarantee 100% authenticity and originality.
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="Head">No Cryptocurrency? No Problem</h2>
                    <div className="row">
                        <div className="col-12 content ml-md-4 mt-md-4 pr-md-3">
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
                <div className="aboutus-partners-container">
                    <Partners/>
                </div>
 

                <div className="Roadmap">
                    <h2 className="Head">ROADMAP</h2>
                    <Roadmap />
                </div>

                <div className="join-us">
                    <h2 className="Head">JOIN US</h2>
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