import React from 'react'

const Press = () => {
    return (
        <section className="dark customSec press">
            <div className="container">
                <div className="scroller">
                    <div className="sectionHeading justify-content-center text-center">
                        <div className="d-block">
                            <h2>PRESS RELEASE</h2>
                            <h3>Colexion is making headlines around the world.</h3>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="row justify-content-around">
                        <img src={process.env.PUBLIC_URL + '/images/press release/ani.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/apn.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/BS.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/dna.png'} alt="" />
                    </div>
                    <div className="row justify-content-around">
                        <img src={process.env.PUBLIC_URL + '/images/press release/Kuwait_times.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/outlook.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/thehindu.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/press release/the-print.png'} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Press;