import React from 'react'

const About = () => {
    return (
        <section className="customSec aboutUs"> 
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-12">
                        <div className="videoFrame1">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm-5 col-12">
                        <div className="sectionHeading mb-0 pt-4">
                            <div className="d-block">
                                <div className="d-block"><img src={process.env.PUBLIC_URL + '/images/strip.png'} alt="" /></div>
                                <span className="strip">About Us</span>
                                <h2>What's colexion?</h2>
                                <h3>The world’s first-ever virtual Art Museum starring legendary figures across Entertainment and Sports Industry, offers you the golden opportunity to know more about your favorite celebrities. Get ready to experience the best-ever virtual journey featuring renowned icons from 'The Golden Era' to ' The Aughts'. Do not miss the chance to check out the wonderland full of Megastars NFTs.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;