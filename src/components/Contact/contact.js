import React, { Component } from 'react'
import ContactForm from './contactfrom'
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneContactSection"
class Contact extends Component {

    state = {
        data: {},
        heading: 'Бидэнтэй холбогдоорой',
        content: 'anime',
        address: 'Улаанбаатар, Бээжингийн гудамж, Seoul Business Center, 3 давхарт, 10 тоот',
        phone: '+976 77440606',
        email: 'info@uparking.mn',
        branch: 'Төв оффис'
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
                // console.log(this.state)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="contact" className="contact-us ptb-90">
                <div className="contact-us-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="section-heading">
                                    <h3>{this.state.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                                <div className="footer-address">
                                    <h6>{this.state.branch}</h6>
                                    <p>{this.state.address}</p>
                                    <ul>
                                        <li><i className="fa fa-phone"></i> <span>Phone: {this.state.phone}</span></li>
                                        <li><i className="fa fa-envelope-o"></i> <span>Email : <a
                                            href="mailto:hello@yourdomain.com">{this.state.email}</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact