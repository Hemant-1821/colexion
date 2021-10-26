import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Featured = () => {
    const [playerList, setPlayerList] = useState([]);
    useEffect(()=>{
        getApiData()
    },[])
    const getApiData = async () => {
        const apiData = await axios.get('https://appi.colexion.io/api/Player')
        console.log(apiData.data)
        setPlayerList(apiData.data)
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
                            <h2>Featured Sports</h2>
                            <h3>Collect exclusive licensed NFTs of your favourite cricket stars.</h3>
                        </div>
                        <div className="headingBtn">
                            <Link to="/viewall" className="customBtn2">View All <i className="fas fa-arrow-right ml-2"></i></Link>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {
                            playerList.map(player =>(
                                <div className="slideWrp" key={player._id}>
                                    <div className="slideImg">
                                        <img src={`https://appi.colexion.io/${player.pflag}`} alt="" />
                                    </div>
                                    <div className="slideContent">
                                        <Link to={`details/${player._id}/Player`}>
                                            <h3>{player.name}</h3>
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
                                <Link to="details/11">
                                <h3>Dwayne-Bravo</h3>
                                <p>The Champion</p>
                                </Link>
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
export default Featured;