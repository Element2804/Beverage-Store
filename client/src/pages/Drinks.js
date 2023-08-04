import React, { Component } from "react";
import Slider from "react-slick";
import Modal from "./modals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";

export default class SimpleSlider extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h1>Featured Drinks</h1>
        <Slider {...settings}>
          <Modal />
          <Modal />
          <Modal />
          <Modal />
          <Modal />
          <Modal />
        </Slider>
        <CategoryMenu />
        <ProductList />
      </div>
    );
  }
}
