import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Featured = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    };
    return (
        <section className="dark customSec">
            <div className="container">
                <div className="scroller">
                    <div className="sectionHeading">
                        <div className="headingLeft">
                            <h2>Featured Sports</h2>
                            <h3>Collect exclusive licensed NFTs of your favourite cricket stars.</h3>
                        </div>
                        <div className="headingBtn">
                            <Link to="/" className="customBtn2">View All <i className="fas fa-arrow-right ml-2"></i></Link>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Featured;