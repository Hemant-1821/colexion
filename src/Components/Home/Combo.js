import React from 'react'
import Slider from "react-slick";

const Combo = () => {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots:false,
        autoplay: true,
        nav:false,
        speed: 500
    };
    return (
        <section className="dark customSec combo">
            <div className="container">
                <div className="scroller">
                    <div className="sectionHeading justify-content-center text-center">
                        <div className="d-block">
                            <h2>EXCLUSIVE COMBO PACKS</h2>
                            <h3>Get your hands on the exclusive NFT cards with multiple benefits.</h3>
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
                </div>
            </div>
        </section>
    )
}
export default Combo;