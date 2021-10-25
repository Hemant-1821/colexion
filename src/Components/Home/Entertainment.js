import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Entertainment = () => {
    const [enterList, setenterList] = useState([]);
    useEffect(()=>{
        getApiData()
    },[])
    const getApiData = async () => {
        const apiData = await axios.get('https://appi.colexion.io/api/Enter')
        console.log(apiData.data)
        setenterList(apiData.data)
    }
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
                slidesToScroll: 1,
                infinite: true
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
                            <h2>Entertainment</h2>
                            <h3>Own iconic and rare moments of your favourite celebrities.</h3>
                        </div>
                        <div className="headingBtn">
                            <Link to="/" className="customBtn2">View All <i className="fas fa-arrow-right ml-2"></i></Link>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {
                            enterList.map(enter =>(
                                <div className="slideWrp" key={enter._id}>
                                    <div className="slideImg">
                                        <img src={`https://appi.colexion.io/${enter.img}`} alt="" />
                                    </div>
                                    <div className="slideContent">
                                        <Link to={`details/${enter._id}`}>
                                        <h3>{enter.name}</h3>
                                        <p>The Champion</p>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div>
                        <div className="slideWrp">
                            <div className="slideImg">
                                <img src={process.env.PUBLIC_URL + '/images/bravo.png'} alt="" />
                            </div>
                            <div className="slideContent">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Entertainment;