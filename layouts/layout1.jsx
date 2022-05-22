import React from "react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

export default function Layout1({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
