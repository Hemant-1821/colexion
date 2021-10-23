import React from 'react'

export default function Teams() {
    return (
        <section className="customSec dark"> 
        <div className="container">
            <div className="sectionHeading justify-content-center text-center">
                <div className="d-block">
                    <h2>FOUNDING TEAM</h2>
                    <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
                </div>
            </div>
                   
                    <div className="team-images">
                        <div className="row mt-5 justify-content-around">
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-around">
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                            <div className="col-md-3 image-container">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder-bg.png'} className="founder-image-bg"></img>
                                <img alt="" src={process.env.PUBLIC_URL + '/images/founder.png'}  className="founder-image"></img>
                                <div className="member-name">Abhay Aggrawal</div>
                                <div className="member-designation">CEO & Founder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
