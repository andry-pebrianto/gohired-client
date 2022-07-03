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

export default function LandingCarousel() {
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
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
        Their opinion about GoHired
      </h1>
      <Slider {...settings}>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/bambang.jpeg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Bambang Hermanto</p>
            <p className="text-center text-secondary">
              <small>Web Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              aliquam?
            </p>
          </div>
        </div>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/alan.jpeg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Alan Beker</p>
            <p className="text-center text-secondary">
              <small>Mobile Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              reprehenderit minus odio?
            </p>
          </div>
        </div>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/heri.jpeg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Heri Gunawan</p>
            <p className="text-center text-secondary">
              <small>Desktop Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/nori.jpeg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Nori Julian</p>
            <p className="text-center text-secondary">
              <small>Web Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus ad officia earum sed delectus.
            </p>
          </div>
        </div>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/hertod.jpg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Heroisgod</p>
            <p className="text-center text-secondary">
              <small>Web Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, omnis vero?
            </p>
          </div>
        </div>
        <div className="h-100">
          <div
            className="shadow p-4 mb-5 bg-body rounded mx-2"
            style={{ height: "350px" }}
          >
            <div
              style={{
                position: "relative",
                height: 120,
                width: 120,
              }}
              className="mx-auto"
            >
              <Image
                src="https://images227.netlify.app/gohired/ewing.jpg"
                className="rounded-circle cover"
                layout="fill"
                alt="Gambar Profile"
              />
            </div>
            <p className="text-center mt-2 fw-bold my-0">Ewing 3GP</p>
            <p className="text-center text-secondary">
              <small>Mobile Developer</small>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fugiat nostrum!
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
