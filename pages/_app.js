import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import NextNProgress from "nextjs-progressbar";
import { wrapper } from "../redux/store";
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
      <NextNProgress color="#5E50A1" />
      <ToastContainer />
      <Layout token={getCookie("token")} id={getCookie("id")}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
