import React from 'react';
import Partners from '../Home/Partners';
import Press from '../Home/Press';
import Teams from '../Teams';
import './Aboutus.css';
import Roadmap from './Roadmap/Roadmap';

const Aboutus = () => {
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
                    <div className="Head">WHAT'S COLEXION?</div>
                    <div className="row">
                        <div className="col-6 content left-col">
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
                        </div>
                        <div className="col-6 content right-col">
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
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
                <Partners/>
 

                <div className="Roadmap">
                    <div className="Roadmap-head">ROADMAP</div>
                    <Roadmap />
                </div>

                <div className="join-us">
                    <div className="join-us-head">JOIN US</div>
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