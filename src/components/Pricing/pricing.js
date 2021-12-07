import React from 'react'
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePricingSection";
class Pricing extends React.Component {

    state = {
        data: {},
        pricingData: []
    }

    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    pricingData: res.data.pricingData
                })
                // console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {/* start pricing */}
                <section id="pricing" className="pricing-section ptb-90">
                <div className="pricing-section-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.data.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="bg-color-sky-light">
                                <div className="content-md container">
                                    <div className="row">
                                        {this.state.pricingData.map((item, idx) => {
                                            return(
                                                <div key={`pricing_${idx}`} className="col-md-4">
                                                {/* start pricing single */}
                                                    <div className="pricing-single bg-secondary">
                                                        <div className="pricing-single-header">
                                                            <h4>{item.heading}</h4>
                                                            <span>{item.type}</span>
                                                        </div>
                                                        <div className="pricing-single-content">
                                                            <div className="mb-40">
                                                                <span className="price-icon-sign"><i className="fa fa-dollar"></i></span>
                                                                <span className="main-price">{item.minPrice}</span>
                                                                <span className="sub-price">{item.subPrice}</span>
                                                                <span className="main-price-info">{item.packageTime}</span>
                                                            </div>
                                                            <div className="center-block">
                                                                <button type="button" className="softo-btn-outline">Purchase</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            )
                                        })}
                                    </div>
                                    {/* end row */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                {/* end pricing */}
            </div>
        )
    }
}

export default Pricing