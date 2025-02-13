import React from "react";
import Slider from "react-slick";
import "../styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const carouselItems = [
    { id: 1, title: "Placeholder 1", description: "Descripción 1" },
    { id: 2, title: "Placeholder 2", description: "Descripción 2" },
    { id: 3, title: "Placeholder 3", description: "Descripción 3" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="placeholder-box">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
