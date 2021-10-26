import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

const Video = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(async() => {
        axios.get('https://appi.colexion.io/api/Videos').then(resp => {
            setData(resp.data);
        });
    }, [])

    return (
        <section className="homeVideoSec dark">
            <div className="container">
                <div className="homeVideo">
                    <Carousel autoPlay={false} showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={true}>
                        {data.map((video) => {
                            return(
                                <div className="videoBx" key={video._id}>
                                    <video width="100%" height="600" controls>
                                        <source src={"https://appi.colexion.io/"+video.video} type="video/mp4" />
                                    </video>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
export default Video;