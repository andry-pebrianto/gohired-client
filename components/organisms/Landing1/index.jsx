import React from "react";
import styles from "../../../styles/Landing.module.css";

export default function Landing1() {
  return (
    <div className="container my-5">
      <div
        className={`${styles.banner} row d-flex align-items-center mb-5 px-3 px-md-0`}
      >
        <div className="col-12 col-md-7 col-lg-6">
          <p className="display-5 fw-bold">
            Talenta terbaik negeri untuk perubahan revolusi 4.0
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            architecto eveniet corporis sunt est ipsum delectus, perferendis
            perspiciatis. Fugiat, officiis.
          </p>
          <div
            className="btn btn-lg text-white"
            style={{ backgroundColor: "#5E50A1" }}
          >
            Mulai Dari Sekarang
          </div>
        </div>
        <div className="col-md-5 col-lg-6 d-none d-md-block">
          <div className="d-flex justify-content-end">
            <div className="position-relative">
              <img
                className={`${styles["z-index"]} position-absolute`}
                src="https://images227.netlify.app/gohired/landing1.webp"
                alt="Gambar Landing 1"
              />
              <div className={`${styles.box1}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
