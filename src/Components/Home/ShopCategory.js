import React from 'react'

const ShopCategory = () => {
    return (
        <section className="dark customSec shopCategory">
            <div className="container">
                <div className="sectionHeading justify-content-center text-center">
                    <div className="d-block">
                        <h2>shop by category</h2>
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
                    </div>
                </div>
                <div className="shopCategoryList">
                    <div className="shopCategoryBx">
                        <img src={process.env.PUBLIC_URL + '/images/homepage/celebrities.svg'} alt="" />
                        <h4>celebrities</h4>
                    </div>
                    <div className="shopCategoryBx">
                        <img src={process.env.PUBLIC_URL + '/images/homepage/sports.svg'} alt="" />
                        <h4>sports</h4>
                    </div>
                    <div className="shopCategoryBx">
                        <img src={process.env.PUBLIC_URL + '/images/homepage/art.svg'} alt="" />
                        <h4>art</h4>
                    </div>
                    <div className="shopCategoryBx">
                        <img src={process.env.PUBLIC_URL + '/images/homepage/lifestyle.svg'} alt="" />
                        <h4>lifestyle</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShopCategory;