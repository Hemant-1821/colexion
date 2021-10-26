import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Combo from './Home/Combo';
import axios from 'axios';

const PackDetails = () => {
    const [data, setData] = React.useState([]);
    const { id, type } = useParams();
    console.log(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(type === 'Player'){
            axios.get('https://appi.colexion.io/api/Player').then(resp => {
                setData(resp.data.find((player) => player._id === id));
            });
        } else {
            axios.get('https://appi.colexion.io/api/Enter').then(resp => {
                setData(resp.data.find((Enter) => Enter._id === id));
            });
        }
      }, [])
    return (
        <React.Fragment>
            <section className="dark customSec pt-4">
                <div className="container">
                    <div className="productDetailsWrp">
                        <div className="productDetailsCard">
                            <div className="d-block">
                                <Link to="/"><i class="fas fa-arrow-left"></i> Back</Link>
                            </div>
                            <div className="productDetailsCardImg">
                                <div className="countryFlag">
                                    <img src={"https://appi.colexion.io/"+data.cflag} alt="" />
                                </div>
                                <div className="playerImg">
                                    <img src={"https://appi.colexion.io/"+data.pflag} alt="" />
                                </div>
                                <div className="playerName">
                                    <span>{data.name}</span>
                                    <span><i>AGE</i> ({data.age})</span>
                                </div>
                            </div>
                            <div className="playerStats">
                                <h5>Stats</h5>
                                <ul className="list-inline playerStatsList">
                                    <li>ONE DAY</li>
                                    <li><span>{data.orun}</span>Run</li>
                                    <li><span>{data.orate}</span>Run Rate</li>
                                    <li><span>{data.owicket}</span>Wickets</li>
                                    <li><span>{data.ocatch}</span>Catch</li>
                                </ul>
                                <ul className="list-inline playerStatsList">
                                    <li>Test Match</li>
                                    <li><span>{data.trun}</span>Run</li>
                                    <li><span>{data.trate}</span>Run Rate</li>
                                    <li><span>{data.twicket}</span>Wickets</li>
                                    <li><span>{data.tcatch}</span>Catch</li>
                                </ul>
                            </div>
                        </div>
                        <div className="productDetailsContent">
                            <h2>A fusion of fun and adventure</h2>
                            <p>Gain multiple access and special powers at the same time with Colexion combo pack including black, gold and platinum cards.</p>
                            <h4>To understand the cards, here are a few tips:</h4>
                            <ul>
                                <li>Every combo will come with a set of 5.</li>
                                <li>Gold and silver cards will make up the Star combo.</li>
                                <li>Only silver cards will make up the Super combo.</li>
                                <li>Multiple combos will be available on Colexion.</li>
                                <li>The price will vary according to the available cards in each combo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="dark customSec combo pb-5">
            <div className="container">
                <div className="scroller">
                    <div className="sectionHeading">
                        <div className="d-block">
                            <h2>Combo Packs</h2>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                        <div className="comboBx">
                            <img src="http://colexion.io/assets/images/card-1.png" alt="" />
                        </div>
                    </Slider>
                    <div className="text-center mt-5">
                        <Link to="/" className="customBtn">Join waitlist</Link>
                    </div>
                </div>
            </div>
        </section> */}
        <Combo />
        <section className="dark customSec speciality pb-2">
            <div className="container">
                <div className="sectionHeading">
                    <div className="d-block">
                        <h2>colexion speciality</h2>
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico1.png'} alt="" />
                            <h3>Introductry pack</h3>
                            <p>Introductory Pack Journey towards Success Introductory Pack Journey towards Success</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="" />
                            <h3>Autograph Cards</h3>
                            <p>Autograph Cards Celebrities Hallmark Autograph Cards Celebrities Hallmark</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico3.png'} alt="" />
                            <h3>Triumph Deck</h3>
                            <p>Triumph Deck Victory Moments Triumph Deck Victory Moments Triumph Deck Victory Moments</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico4.png'} alt="" />
                            <h3>Momentous videos</h3>
                            <p>Introductory Pack Journey towards Success Introductory Pack Journey towards Success</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico2.png'} alt="" />
                            <h3>Stamp Card</h3>
                            <p>Autograph Cards Celebrities Hallmark Autograph Cards Celebrities Hallmark</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="bx">
                            <img src={process.env.PUBLIC_URL + '/images/ico5.png'} alt="" />
                            <h3>Classic Deck</h3>
                            <p>Stamp Card Celebrities Impression Stamp Card Celebrities Impression Stamp Card Celebrities Impression</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}
export default PackDetails;