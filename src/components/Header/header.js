import React from 'react'

const Header = () => {
    return (
        <div>
            {/* start header section */}
            <header className="header">
                {/* start navbar */}
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container header-container">
                        <div className="row">
                            <div className="navbar-header page-scroll">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#myNavbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand page-scroll" href="/">
                                    <img src={"/img/logo.png"} alt="logo" style={{height: '35px'}} />
                                </a>
                            </div>

                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="navbar-collapse collapse" id="myNavbar">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active"><a className="page-scroll" href="#hero">Нүүр Хуудас</a></li>
                                    <li><a className="page-scroll" href="#faqs">Түгээмэл асуултууд</a></li>
                                    <li><a className="page-scroll" href="#news">Мэдээ</a></li>
                                    <li><a className="page-scroll" href="#contact">Холбоо барих</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* end navbar */}
            </header>
            {/* end header section */}
        </div>
    )
}


export default Header;