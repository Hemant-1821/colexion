import React from 'react'
import Slider from "react-slick";

const FaqScroll = () => {
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
                    <div className="sectionHeading justify-content-center text-center">
                        <div className="d-block">
                            <h2>KNOW ALL ABOUT NFTS</h2>
                            <h3>Become familiar with NFTs from scratch </h3>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="faqSlide">
                            <div className="faqSlideContent">
                                <h3>How does <br/>Blockchain work?</h3>
                                <p>Through encryption, a blockchain is a version of a ledger (or database) that records transactions between peers in chronological order.</p>
                            </div>
                        </div>
                        <div className="faqSlide">
                            <div className="faqSlideContent">
                                <h3>What is NFT?</h3>
                                <p>Fungibility is a prerequisite for understanding NFT. An object or item is fungible when it can be replaced by another copy of the .</p>
                            </div>
                        </div>
                        <div className="faqSlide">
                            <div className="faqSlideContent">
                                <h3>What makes NFTs so valuable?</h3>
                                <p>An NFT offers a digital ledger that can be used to value, buy, and exchange digital art securely. First, there was the patent of Nike's authenticity</p>
                            </div>
                        </div>
                        <div className="faqSlide">
                            <div className="faqSlideContent">
                                <h3>How does <br/>Blockchain work?</h3>
                                <p>Through encryption, a blockchain is a version of a ledger (or database) that records transactions between peers in chronological order.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default FaqScroll;