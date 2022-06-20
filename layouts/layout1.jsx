import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export default function Layout1({ token, id, children }) {
  return (
    <>
      <Navbar token={token} id={id} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
