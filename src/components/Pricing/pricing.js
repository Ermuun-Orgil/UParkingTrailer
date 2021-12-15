import React from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePricingSection";
class Pricing extends React.Component {
  state = {
    data: {},
    pricingData: [],
    heading: 'Бидний тухай',
    content: 'Uparking. Your parking from Uparking Int LLC',
    image: 'img/myTeam-image.png',
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        this.setState({
          data: res.data,
          pricingData: res.data.pricingData,
        });
        // console.log(this.state)
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {/* start pricing */}
        <section id="pricing" className="pricing-section ptb-90">
          <div className="pricing-section-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="section-heading">
                    <h3>{this.state.heading}</h3>
                    <p>{this.state.content}</p>
                  </div>
                  <div className="panel-group" id="accordion">
                    {/* Start Single Item */}
                    <p>
                        “Юу Паркинг Инт” ХХК нь Монгол улсад анхдагч болох Авто
                      зогсоолын түрээсийн цахим peer to peer Uparking платформыг
                      хөгжүүлж байгаа юм.
                        Авто зогсоолын асуудал нь
                      хүрэлцээнээсээ бус зөв менежментгүйгээсээ болж үүсдэг.
                      Тиймээс Uparking платформ нь авто зогсоолын хүрэлцээг
                      нэмэгдүүлэх боломж, цаашид авто зогсоол төлөвлөлтийг
                      нэмэгдүүлэх ач холбогдолтой төсөл гэж харж, хөгжүүлж
                      байна.
                    </p>

                    {/* End Single Item */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="faq-img">
                    <img
                      src={this.state.image}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end pricing */}
      </div>
    );
  }
}

export default Pricing;
