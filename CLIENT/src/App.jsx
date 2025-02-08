import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap
import "./App.css";
import CustomNavbar from "./components/Navbar";

const App = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/mcfrees/")
      .then((response) => {
        console.log("Datos recibidos:", response.data);
        setCarouselItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching carousel items:", error);
      });
  }, []);

  const newReleases = [
    {
      id: 1,
      title: "Hip Hop",
      image: "http://127.0.0.1:8000/media/carrusel/zapatillas-running.jpg",
      description: "Santiago",
      price: "89.99",
    },
    {
      id: 2,
      title: "Freestyler",
      image: "http://127.0.0.1:8000/media/carrusel/camiseta-tech.jpg",
      description: "La Pintana",
      price: "39.99",
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "El mejor Rap",
      image: "http://127.0.0.1:8000/media/carrusel/zapatillas-hovr.jpg",
      description: "---",
      price: "99.99",
      discount_price: "79.99",
    },
    {
      id: 2,
      title: "Freestyler",
      image: "http://127.0.0.1:8000/media/carrusel/chaqueta-storm.jpg",
      description: "---",
      price: "129.99",
      discount_price: "99.99",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="app">
      {/* Integración de Navbar */}
      <CustomNavbar />

      <header className="header text-center mt-4">
        <h1>LOS MÁS POPULARES</h1>
      </header>

      {/* Sección del Carrusel */}
      <div className="container mt-4">
        <div className="carousel-container">
          {carouselItems.length > 0 ? (
            <Slider {...settings}>
              {carouselItems.map((item) => (
                <div key={item.id} className="carousel-item">
                  <img
                    src={`http://127.0.0.1:8000${item.image}`}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.price && <p className="price">Precio: ${item.price}</p>}
                  {item.discount_price && (
                    <p className="discount-price">
                      Oferta: ${item.discount_price}
                    </p>
                  )}
                </div>
              ))}
            </Slider>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>

      {/* Nuevos Lanzamientos */}
      <div className="container mt-5">
        <h2>Nuevos Lanzamientos</h2>
        <div className="row">
          {newReleases.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ofertas Especiales */}
      <div className="container mt-5">
        <h2>Ofertas Especiales</h2>
        <div className="row">
          {specialOffers.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="price">Precio: ${product.price}</p>
                  <p className="discount-price">
                    Oferta: ${product.discount_price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
