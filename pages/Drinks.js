import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h1>Featured Drinks</h1>
        <Slider {...settings}>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
            <div>
                <div id="item"></div>
            </div>
        </Slider>
      </div>
    );
  }
}