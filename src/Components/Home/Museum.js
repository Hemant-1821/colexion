import React from 'react'

const Museum = () => {
    return (
        <section className="customSec museum"> 
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="videoFrame">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/5E_GTn8uhn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="sectionHeading mb-0 pt-2">
                            <div className="d-block">
                                <h2 className="mb-4">World’s 1st<br/>Digital Museum</h2>
                                <h3>The world’s first-ever virtual Art Museum starring legendary figures across Entertainment and Sports Industry, offers you the golden opportunity to know more about your favorite celebrities. Get ready to experience the best-ever virtual journey featuring renowned icons from 'The Golden Era' to ' The Aughts'. Do not miss the chance to check out the wonderland full of Megastars NFTs.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Museum;