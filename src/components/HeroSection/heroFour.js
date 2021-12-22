import React from "react";

let bg = "/img/hero-section-bg-2.jpg";
let bgCss = "no-repeat center center / cover";
let bgStyle = {
  background: "url(" + bg + ")" + bgCss,
};

let initData = {
  heading: "UParking. Your parking",
  content:
    "Зогсоолын ашиглалт болон хэрэглээ, хэрэгцээг нэмэгдүүлэх дижитал шийдэл.",
  heroImage: "/img/faq-right.png",
  actionShapeImage: "/img/shape-bg.png",
};

let slider_action_data = [
  {
    link: "apple",
    btnClass: "btn softo-solid-btn",
    faClass: "fa fa-apple",
    value: "Appstore",
  },
  {
    link: "android",
    btnClass: "btn btn-icon",
    faClass: "fa fa-android",
    value: "",
  },
];

class HeroSection extends React.Component {
  state = {
    initData: {},
    sliderData: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      sliderData: slider_action_data,
    });
  }
  render() {
    return (
      <div>
        <div id="hero-section" style={bgStyle}>
          <div className="hero-background-video">
            <div className="video-section-wrap-two">
              <div className="pattern-overlay">
                <div
                  className="player"
                  data-property="{videoURL:'https://www.youtube.com/watch?v=xDZI1nD1XRQ',containment:'.video-section-wrap-two', quality:'highres', autoPlay:true, showControls: false, mute:true, opacity: 1}"
                ></div>
                <div style={{zIndex: '3'}} className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="hero-content-wrap">
                        <div className="hero-content typed-strings">
                          <h1>
                            {" "}
                            {this.state.initData.heading}
                            <br /> <span className="typed"></span>{" "}
                          </h1>
                          <p>{this.state.initData.content}</p>
                          <div className="slider-action-btn">
                            {this.state.sliderData.map((item, idx) => {
                              return (
                                <a
                                  key={`sl_${idx}`}
                                  href={item.link}
                                  className="btn btn-icon"
                                >
                                  <i className={item.faClass}></i>
                                </a>
                              );
                            })}
                            <a
                              href="https://www.youtube.com/watch?v=W5OIdABF4oQ"
                              className="video"
                            >
                              <span className="ti-control-play"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero-image">
                        <img
                          src={this.state.initData.heroImage}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{zIndex: '2'}} className="section-shape">
            <img style={{height: '30vh'}} src={this.state.initData.actionShapeImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
