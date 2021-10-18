import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Video = () => {
    return (
        <section className="homeVideoSec dark">
            <div className="container">
                <div className="homeVideo">
                    <Carousel autoPlay={false} showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={true}>
                        <div className="videoBx">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="videoBx">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="videoBx">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
export default Video;