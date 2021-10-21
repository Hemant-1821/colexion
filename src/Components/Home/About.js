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
                                <span className="strip">About Colexion</span>
                                <h2>About Colexion</h2>
                                <h3>Colexion aims to expand relationships between artists and fans by providing a more valuable platform for artists' digital artworks on Polygon Network. The platform combines crypto and culture in a way that fosters mutual support between creators, collectors, and celebrities. Own the unique memorabilia and moments of cricketers and celebrities at Colexion.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;