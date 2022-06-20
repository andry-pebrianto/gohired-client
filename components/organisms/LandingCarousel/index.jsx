import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Landing.module.css";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

export default function LandingCarousel({ data }) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`container-fluid ${styles["slider-container"]}`}>
      <h1 className="fw-bold text-center mb-5">
        New workers who have joined us
      </h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="h-100">
            <div
              className="shadow p-4 mb-5 bg-body rounded mx-2"
              style={{ height: "280px", overflow: "auto" }}
            >
              <div
                style={{
                  position: "relative",
                  height: 120,
                  width: 120,
                }}
                className="mx-auto"
              >
                {item.photo ? (
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${item.photo}`}
                    className="rounded-circle"
                    layout="fill"
                    alt="Gambar Profile"
                  />
                ) : (
                  <Image
                    src="https://images227.netlify.app/mernuas/default.jpg"
                    className="rounded-circle"
                    layout="fill"
                    alt="Gambar Profile"
                  />
                )}
              </div>
              <p className="text-center mt-2 fw-bold my-0">{item.name}</p>
              <p className="text-center text-secondary"><small>{item.job_desk}</small></p>
              <p className="text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
