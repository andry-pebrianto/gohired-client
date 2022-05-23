import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Layout1 from "../layouts/layout1";

const layouts = {
  L1: Layout1,
};

const NoLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || NoLayout;

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
