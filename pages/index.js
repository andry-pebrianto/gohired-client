import React from "react";
import axios from "axios";
import Landing1 from "../components/organisms/Landing1";
import Landing2 from "../components/organisms/Landing2";
import Landing3 from "../components/organisms/Landing3";
import LandingCarousel from "../components/organisms/LandingCarousel";
import LandingInvitation from "../components/organisms/LandingInvitation";

export async function getStaticProps(context) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/worker/new`
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
      <br />
      <Landing1 />
      <br />
      <br />
      <br />
      <Landing2 />
      <br />
      <br />
      <br />
      <Landing3 />
      <LandingCarousel data={data} />
      <LandingInvitation />
    </>
  );
};

Landing.layout = "L1";

export default Landing;
