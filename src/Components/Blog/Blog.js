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
                <div className="row blog-section blog-right-col">
                    <div className="col-md-6">
                        <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <Link className="Read-Article" to="/blog-detail">
                            <span>Read Article <img className="arrow-img" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} alt=""/></span>
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid blog-right-col">
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                    </div>
                    <div className="row blog-grid blog-right-col">
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                    </div>
                </div>

                <div className="row blog-section blog-right-col">
                    <div className="col-md-6">
                        <img className="blog-img" src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <Link className="Read-Article" to="/blog-detail">
                            <span>Read Article <img className="arrow-img" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} alt=""/></span>
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid blog-right-col">
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                    </div>
                </div>

                <div className="row blog-section blog-right-col">
                    <div className="col-md-6">
                        <img className="blog-img" src={process.env.PUBLIC_URL + '/images/blog/lady.png'} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="blog-Wallets">MARKETS</p>
                        <p className="Which-Indian-celebrities-are-showing-interest-in-NFT">Which Indian celebrities are showing interest in NFT</p>
                        <p className="which-Indian-content">Which Indian celebrities are showing interest in NFT NFTs are not only an ongoing craze between Artists and Crypto users but NFTs are also gaining the attention of major Celebrities. Since NFTs</p>
                        <Link className="Read-Article" to="/blog-detail">
                            <span>Read Article <img className="arrow-img" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'} alt=""/></span>
                        </Link>
                    </div>
                </div>

                <div className="">
                    <div className="row blog-grid blog-right-col">
                    <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                        <div className="col-md-4">
                            <img className="grid-img" src={process.env.PUBLIC_URL + '/images/blog/grid-1.png'} alt="" />
                            <p className="grid-Wallets">MARKETS</p>
                            <p className="grid-card-head">How Artists are gaining exposure from NFTs</p>
                            <p className="grid-content">How Artists are gaining exposure from NFTs? If you are an Artist and want to gain some exposure then you might want to gain attractions of people</p>
                            <p className="grid-Read-Article">Read Article <img className="grid-arrow-img" alt="" src={process.env.PUBLIC_URL + '/images/blog/right-arrow.png'}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;
