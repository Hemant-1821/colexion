import React, { useEffect } from 'react';
import './faq.css';

const Faq = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="faq">
            <div className="container">
                <div className="faqs">FAQS</div>
                <div className="Frequently-Asked-Questions">Frequently Asked Questions</div>
                <div className="questions">
                    <div className="Line-92"></div>
                    <div className="question">
                        On which network does Colexion work?
                    </div>
                    <div className="answer">
                        Colexion works on the Polygon Network.
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        Is there a native token for Colexion?
                    </div>
                    <div className="answer">
                        There is a native token for Colexion, called CLXN.
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        Is Colexion a global NFT marketplace?
                    </div>
                    <div className="answer">
                        Colexion is an NFT marketplace based worldwide.
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        Which cryptocurrency is required to buy NFT on Colexion?
                    </div>
                    <div className="answer">
                        It can be bought with any cryptocurrency, fiat, and CLXN (Colexion Native Token).
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        Is a digital collectible the same as an NFT?
                    </div>
                    <div className="answer">
                        Digital collectibles and NFTs have been used interchangeably. The digital collectible tokens minted on our platform run on the Ethereum blockchain. Not all NFTs are digital collectibles, and not all digital collectibles are NFTs.
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        NFTs from which industries are available on Colexion?
                    </div>
                    <div className="answer">
                        We have a variety of NFTs in the arts, sports, and entertainment industries.
                    </div>
                    <div className="Line-92"></div>
                    <div className="question">
                        How Colexion is different from others?
                    </div>
                    <div className="answer">
                        Colexion offers premium licensed NFTs of celebrities and sports stars that make us unique.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;