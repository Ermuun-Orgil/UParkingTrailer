import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneFooterSection";

class Footer extends Component {
  state = {
    data: [],
    initData: {},
    image: "/img/logo-color.png",
    socialMedia: [
      {
        id: 1,
        iconClass: "fa fa-facebook",
        link: "https://www.facebook.com/Uparking.mn",
      },
      {
        id: 2,
        iconClass: "fa fa-instagram",
        link: "https://www.instagram.com/uparking.mn/",
      },
      {
        id: 3,
        iconClass: "fa fa-linkedin",
        link: "https://www.linkedin.com/company/uparking-int-llc/?fbclid=IwAR1ULRNOclPSn5sdw2Zzc8jOQOgC3z-xbGysoyKFPCLhiXnpYfk_VcID5C4",
      },
      {
        id: 4,
        iconClass: "fa fa-twitter",
        link: "https://twitter.com/UParkingmn?fbclid=IwAR1LvaSB7cGC9nW5oxD8LCSwTWNxY1F-vWGYBR1bJ6n_hFCb0XoW8f9WtrM",
      },
      {
        id: 5,
        iconClass: "fa fa-youtube",
        link: "https://www.youtube.com/channel/UC7lIZXgLUYIAq9q4ZZxtN-w",
      },
    ],
  };
  componentDidMount() {
    axios.get(`${BASE_URL}`).then((res) => {
      this.setState({
        data: res.data.socialMedia,
        initData: res.data,
      });
      // console.log(this.state)
    });
  }

  render() {
    return (
      <footer className="footer-section bg-secondary ptb-60">
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="footer-single-col text-center">
                  <img
                    style={{ width: "250px" }}
                    src={this.state.initData.image}
                    alt=""
                  />
                  <div className="footer-social-list">
                    <ul className="list-inline">
                      {this.state.socialMedia.map((item, idx) => {
                        return (
                          <li key={`fo_${idx}`}>
                            <a
                              style={{
                                width: "60px",
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                              href={item.link}
                            >
                              {" "}
                              <i
                                style={{ fontSize: "20px" }}
                                className={item.iconClass}
                              ></i>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="copyright-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
