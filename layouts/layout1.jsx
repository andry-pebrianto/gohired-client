import React from "react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

export default function Layout1({ token, id, children }) {
  return (
    <>
      <Navbar token={token} id={id} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
