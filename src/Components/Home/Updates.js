import React from 'react'

const Updates = () => {

    return (
        <React.Fragment>
            {console.log(localStorage.getItem('theme'))}
            <div className="container">
                <div className="updatesWrp">
                    <ul className="listInline">
                        <li>
                            <h4>LATEST UPDATES</h4>
                        </li>
                        <li className="d-flex">
                            <img src={process.env.PUBLIC_URL + '/images/homepage/mfn-logo.png'} alt="" />
                            <h3>Colexion jersey launch exclusively at Matrix Fight Night on 24 September 2021 at Palazzo Versace Hotel, Dubai. </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Updates;