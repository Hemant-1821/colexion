import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAll = () => {

    const [players, setPlayers] = React.useState([]);
    const [enters, setEnters] = React.useState([]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('https://appi.colexion.io/api/Player').then(resp => {
            setPlayers(resp.data);
        });
        axios.get('https://appi.colexion.io/api/Enter').then(resp => {
            setEnters(resp.data);
        });
    }, []);

    return(
        <div className="dark">
            <div className="container">
                <div className="productDetailsCard pt-5">
                    <div className="d-block">
                        <Link to="/"><i class="fas fa-arrow-left"></i> Back</Link>
                    </div>
                </div>
                <div className="sports-section mt-5">
                    <div className="sectionHeading">
                        <div className="headingLeft">
                            <h2>FEATURED SPORTS</h2>
                            <h3>Collect exclusive licensed NFTs of your favourite cricket stars.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            players.map((player) => (
                                <div className="col-sm-4">
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
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="enters-section mt-5 pb-5">
                    <div className="sectionHeading">
                        <div className="headingLeft">
                            <h2>ENTERTAINMENT</h2>
                            <h3>Own iconic and rare moments of your favourite celebrities.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            enters.map((enter) => (
                                <div className="col-sm-4">
                                    <div className="slideWrp" key={enter._id}>
                                        <div className="slideImg">
                                            <img src={`https://appi.colexion.io/${enter.img}/Enter`} alt="" />
                                        </div>
                                        <div className="slideContent">
                                            <Link to={`details/${enter._id}`}>
                                            <h3>{enter.name}</h3>
                                            <p>The Champion</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll;