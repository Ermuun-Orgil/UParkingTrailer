import React from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePromoSection";

class PromoSection extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}`)
      .then(res => {
        this.setState({
          data: res.data.promoData
        });
        // console.log(this.state.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* start promo section */}
        <section className="promo-section ptb-90">
          <div className="promo-section-wrap">
            <div className="container">
              <div className="row">
                {this.state.data.map((item, idx) => {
                  return (
                    <div key={`s_${idx}`} className="col-md-3 col-sm-6">
                      <div className="bg-secondary single-promo-section text-center">
                        <div className="single-promo-content">
                          <span className={item.iconClass}></span>
                          <h6>{item.heading}</h6>
                          <p>{item.content}</p>
                        </div>
                        <div className="line"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* end promo section */}
      </div>
    );
  }
}

export default PromoSection;
