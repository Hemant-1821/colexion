import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Blog.css';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="blog_page">
            <div className="container">
                <div className="row blog-section">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" height="400px" width="530px" />
                    </div>
                    <div className="col-6 blog-right-col">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <Link className="Read-Article" to="/blog-detail">
                            <span>Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="45px" alt=""/></span>
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid">
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                    </div>
                    <div className="row blog-grid">
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                    </div>
                </div>

                <div className="row blog-section">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" height="400px" width="530px" />
                    </div>
                    <div className="col-6 blog-right-col">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <p className="Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="45px"/></p>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid">
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                    </div>
                </div>

                <div className="row blog-section">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" height="400px" width="530px" />
                    </div>
                    <div className="col-6 blog-right-col">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <p className="Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="45px"/></p>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid">
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                        <div className="col-4">
                            <img src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" height="230px" width="330px" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} height="50px" width="40px"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;
