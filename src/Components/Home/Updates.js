import React from 'react';
import axios from 'axios';

const Updates = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(async() => {
        axios.get('https://appi.colexion.io/api/Latest').then(resp => {
            setData(resp.data);
        })
    }, [])

    return (
        <React.Fragment>
            {console.log(localStorage.getItem('theme'))}
            <div className="container">
                <div className="updatesWrp">
                    <ul className="listInline">
                        <li>
                            <h4>LATEST UPDATES</h4>
                        </li>{
                            data.map((update) => {
                                return(
                                    <li className="d-flex">
                                        <img className="img-fluid" height="100" width="100" src={"https://appi.colexion.io/"+update.img} alt="" />
                                        <h3>{update.text}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Updates;