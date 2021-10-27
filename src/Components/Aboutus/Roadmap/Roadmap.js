import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import './Roadmap.css'

const Roadmap = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
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
                            <h3>Collect exclusive licensed NFTs of your favourite cricket stars.</h3>
                        </div>
                    </div>
                    <Slider {...settings}>
                    {(() => {
          const options = [];

          for (let i = 0; i <= 5; i++) {
            options.push(<div className="">
                            <div className="d-flex justify-content-center">
                                <div className="Quarter-1">
                                    Quarter {i+1}
                                </div>
                            </div>
                            <div className='Roadmap-cont'>
                                <div className="Rectangle-44"></div>
                                <div className="Ellipse-290"></div>
                            </div>
                            <div className="roadmap-content">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            </div>
                        </div>);
          }
          return options;
        })()}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Roadmap;