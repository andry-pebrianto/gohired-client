import Image from "next/image";
import React from "react";
import Logo from "../../../public/img/logo-white.png";
import styles from "../../../styles/Landing.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} text-light`}>
      <div className="d-flex align-items-center">
        <div style={{ position: "relative", height: 40, width: 40 }}>
          <Image src={Logo} layout="fill" alt="GoHired Logo" />
        </div>
        <h2 className="ms-2 mt-2">GoHired</h2>
      </div>
      <p className="mt-3 mb-5" style={{ maxWidth: "350px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio
        corporis qui odit nisi mollitia!
      </p>
      <hr style={{ height: "2px" }} />
      <div className="d-flex justify-content-between mt-4">
        <p className="m-0 p-0">Copyright © 2020 GoHired</p>
        <div className="d-none d-sm-block">
          <a className="text-light me-5" href="#">
            Telepon
          </a>
          <a className="text-light" href="#">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
