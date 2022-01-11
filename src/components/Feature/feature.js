import React from 'react'
import axios from 'axios'

// const BASE_URL = "http://localhost:3001/themeOneFeatureSection";
const BASE_URL = "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOneFeatureSection";

class Feature extends React.Component{
    
    
    state = {
        data : {},
        image: "/img/feature-image.png",
        heading: 'Бүтээгдэхүүн',
        content: 'Хаана ч, Хэзээ ч, Хаанаас ч Автомашинтай холбоотой АСУУДЛЫГ ХӨНГӨВЧИЛЖ, ШИЙДЛИЙГ  ХЯЛБАРЧИЛНА',
        featureDataOne: [
            {
                iconClass: "fa fa-object-ungroup",
                heading: 'Зогсоол хайх',
                content: 'Байршлаар болон Нэрээр хайж зогсоолын мэдээлэл харах, сонгох',
            },
            {
                iconClass: "fa fa-dropbox",
                heading: 'Захиалах, Төлбөр төлөх',
                content: 'Олон төрөлт төлбөрийн шийдэл ашиглан захиалгаа баталгаажуулан, Зогсоолын нэмэлт мэдээлэл авах',
            },
            {
                iconClass: "fa fa-smile-o",
                heading: 'Зогсоол ашиглах',
                content: 'Захиалгын баталгаажсан хугацаандаа зогсоолыг ашиглаж, суллана',
            },
        ],
        featureDataTwo: [
            {
                iconClass: "fa fa-file-archive-o",
                heading: 'Зогсоол бүртгүүлэх',
                content: 'Зогсоолын үндсэн болон нэмэлт мэдээллийг илгээж, Админ баталгаажуулна',
            },
            {
                iconClass: "fa fa-adjust",
                heading: 'Захиалах хүлээн авах',
                content: 'Зогсоолын захиалгын мэдээлийг хянах, захиалгатай өдрүүдэд зогсоол суллаж бэлэн байдлыг хангана',
            },
            {
                iconClass: "fa fa-smile-o",
                heading: 'Орлого хүлээн авах',
                content: 'Захиалгын хугацаа эхэлснээс хойш 24 цагийн дотор хэтэвчинд түрээсийн орлого байршина.',
            },
        ],
    }

    // componentDidMount(){
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 featureDataOne: res.data.featureDataOne,
    //                 featureDataTwo: res.data.featureDataTwo
    //             })
    //             // console.log(this.state.data)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    render(){
        return (
            <div>
                {/* start features section */}
                <section id="features" className="bg-secondary ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.heading}</h3>
                                    <div>{this.state.content}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4 col-sm-6">
                                {/* feature single start */}
                                {this.state.featureDataOne.map((item, idx) => {
                                    return(
                                        <div key={`f_${idx}`} className="single-feature mb-5">
                                            <div className="feature-icon">
                                                <div className="icon icon-shape bg-color white-text">
                                                    <i className={item.iconClass}></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{item.heading}</h5>
                                                <p className="mb-0">{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* feature single end */}
                            </div>
                            <div className="col-md-4 hidden-sm hidden-xs">
                                <div className="feature-image">
                                    <img src={this.state.image} className="pos-hcenter img-responsive" alt="" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                {/* feature single start */}
                                {this.state.featureDataTwo.map((item, idx) => {
                                    return(
                                        <div key={`ft_${idx}`} className="single-feature mb-5">
                                            <div className="feature-icon">
                                                <div className="icon icon-shape bg-color white-text">
                                                    <i className={item.iconClass}></i>
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{item.heading}</h5>
                                                <p className="mb-0">{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* feature single end */}
                            </div>
                        </div>
    
                    </div>
                </section>
                {/* end features section */}
            </div>
        )
    }
}

export default Feature