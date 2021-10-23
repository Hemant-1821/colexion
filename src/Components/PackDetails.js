import React from 'react'
import { Link } from 'react-router-dom';
//import Slider from "react-slick";
import Combo from './Home/Combo';

const PackDetails = () => {
    // var settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     dots:false,
    //     autoplay: true,
    //     nav:false,
    //     speed: 500
    // };
    return (
        <React.Fragment>
            <section className="dark customSec pt-4">
                <div className="container">
                    <div className="productDetailsWrp">
                        <div className="productDetailsCard">
                            <div className="d-block">
                                <Link to="/"><i class="fas fa-arrow-left"></i> Back</Link>
                            </div>
                            <div className="productDetailsCardImg">
                                <div className="countryFlag">
                                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/wicb-1591186696.jpg" alt="" />
                                </div>
                                <div className="playerImg">
                                    <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                                </div>
                                <div className="playerName">
                                    <span>Dwayne-Bravo </span>
                                    <span><i>AGE</i> (26)</span>
                                </div>
                            </div>
                            <div className="playerStats">
                                <h5>Stats</h5>
                                <ul className="list-inline playerStatsList">
                                    <li>ONE DAY</li>
                                    <li><span>67,987</span>Run</li>
                                    <li><span>67.98</span>Run Rate</li>
                                    <li><span>456</span>Wickets</li>
                                    <li><span>678</span>Catch</li>
                                </ul>
                                <ul className="list-inline playerStatsList">
                                    <li>Test Match</li>
                                    <li><span>67,987</span>Run</li>
                                    <li><span>67.98</span>Run Rate</li>
                                    <li><span>456</span>Wickets</li>
                                    <li><span>678</span>Catch</li>
                                </ul>
                            </div>
                        </div>
                        <div className="productDetailsContent">
                            <h2>A fusion of fun and adventure</h2>
                            <p>Gain multiple access and special powers at the same time with Colexion combo pack including black, gold and platinum cards.</p>
                            <h4>To understand the cards, here are a few tips:</h4>
                            <ul>
                                <li>Every combo will come with a set of 5.</li>
                                <li>Gold and silver cards will make up the Star combo.</li>
                                <li>Only silver cards will make up the Super combo.</li>
                                <li>Multiple combos will be available on Colexion.</li>
                                <li>The price will vary according to the available cards in each combo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="dark customSec combo pb-5">
            <div className="container">
                <div className="scroller">
                    <div className="sectionHeading">
                        <div className="d-block">
                            <h2>Combo Packs</h2>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                    </Slider>
                    <div className="text-center mt-5">
                        <Link to="/" className="customBtn">Join waitlist</Link>
                    </div>
                </div>
            </div>
        </section> */}
        <Combo />
        <section className="dark customSec speciality pb-2">
            <div className="container">
                <div className="sectionHeading">
                    <div className="d-block">
                        <h2>colexion speciality</h2>
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico1.png'} alt="" />
                            <h3>Introductry pack</h3>
                            <p>Introductory Pack Journey towards Success Introductory Pack Journey towards Success</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="" />
                            <h3>Autograph Cards</h3>
                            <p>Autograph Cards Celebrities Hallmark Autograph Cards Celebrities Hallmark</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico3.png'} alt="" />
                            <h3>Triumph Deck</h3>
                            <p>Triumph Deck Victory Moments Triumph Deck Victory Moments Triumph Deck Victory Moments</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico4.png'} alt="" />
                            <h3>Momentous videos</h3>
                            <p>Introductory Pack Journey towards Success Introductory Pack Journey towards Success</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="" />
                            <h3>Stamp Card</h3>
                            <p>Autograph Cards Celebrities Hallmark Autograph Cards Celebrities Hallmark</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico5.png'} alt="" />
                            <h3>Classic Deck</h3>
                            <p>Stamp Card Celebrities Impression Stamp Card Celebrities Impression Stamp Card Celebrities Impression</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}
export default PackDetails;