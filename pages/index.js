import React from "react";
import axios from "axios";
import Head from "next/head";
import Landing1 from "../components/organisms/Landing1";
import Landing2 from "../components/organisms/Landing2";
import Landing3 from "../components/organisms/Landing3";
import LandingCarousel from "../components/organisms/LandingCarousel";
import LandingInvitation from "../components/organisms/LandingInvitation";

export async function getStaticProps(context) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/skill/static`
  );

  return {
    props: {
      data: response.data.data,
    },
    revalidate: 10,
  };
}

const Landing = ({ data }) => {
  return (
    <>
      <Head>
        <title>GoHired - Landing</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <Landing1 />
      <br />
      <br />
      <br />
      <Landing2 />
      <br />
      <br />
      <br />
      <Landing3 data={data} />
      <LandingCarousel />
      <LandingInvitation />
    </>
  );
};

Landing.layout = "L1";

export default Landing;
