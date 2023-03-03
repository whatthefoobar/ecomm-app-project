import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";

const CarouselHome = () => {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-color">
          <h3>Let your clothes do the talking</h3>
          <p>
            True fashion shouldn't come with a human or natue cost .Explore our
            latest sustainable threads
          </p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="caption-color">
          <h3>Find your signature style</h3>
          <p>And stand out from the crowd</p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src="/images/home3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="caption-color">
          <h3>Bring color into your life</h3>
          <p>
            Be loud be proud and show your inner beauty off with the help of our
            joyful pieces.
          </p>
          <Link to="/products" className="btn btn-outline-dark">
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
