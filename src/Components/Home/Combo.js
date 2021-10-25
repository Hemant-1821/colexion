import React,{useEffect, useState} from 'react'
import Slider from "react-slick";

const Combo = (props) => {
    const [themeColor, setThemeColor] = useState(props.theme);

    useEffect(() => {
        console.log(props.theme);
        setThemeColor(props.theme);
    }, [props.theme]);
    console.log(themeColor)
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots:false,
        autoplay: true,
        nav:false,
        speed: 500,
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
        <section className="white customSec combo">
            {console.log(props.theme?"true":"false")}
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
            {/* <img src={process.env.PUBLIC_URL + '/images/rays.svg'} alt="" className="comboRays" /> */}
        </section>
    )
}
export default Combo;