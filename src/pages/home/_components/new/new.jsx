import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rasim from "../../../../asstes/images/a.png"

import './new.scss'

export default class New extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: true,
        };
        return (
            <section className='new'>
                <h2 className='new__title'>
                    Новое поступление
                </h2>
                <section className="new_slider">
                    <Slider {...settings}>
                        <section className='new__slider'>
                            <div>
                                <img src={rasim} alt="" />
                            </div>
                            <p>SMC JSY & ZK2*A Блок пневмораспределителей</p>
                        </section>
                        <section className='new__slider'>
                            <div>
                                <img src={rasim} alt="" />
                            </div>
                            <p>SMC JSY & ZK2*A Блок пневмораспределителей</p>
                        </section>
                        <section className='new__slider'>
                            <div>
                                <img src={rasim} alt="" />
                            </div>
                            <p>SMC JSY & ZK2*A Блок пневмораспределителей</p>
                        </section>
                    </Slider>
                </section>
            </section>
        )
    }
}

