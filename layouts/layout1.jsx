import React from "react";
import Navbar from "../components/organisms/Navbar";
// import Footer from "../components/organisms/Footer";

export default function Layout1({ token, slug, children }) {
  return (
    <>
      <Navbar token={token} slug={slug} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
