import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import {
  GET_DETAIL_USER_FAILED,
  GET_DETAIL_USER_SUCCESS,
} from "../../redux/actions/types";
import ProfileWorker from "../../components/organisms/ProfileWorker";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // get api and save to redux during ssr
    try {
      const { id } = context.query;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          headers: {
            token: context.req.cookies.token,
          },
        }
      );

      console.log(response);

      store.dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: GET_DETAIL_USER_FAILED,
        payload: error.message,
      });
    }

    return {
      props: {
        token: context.req.cookies.token,
        id: context.req.cookies.id,
      },
    };
  }
);

const Profile = ({ id }) => {
  const router = useRouter();
  const { detailUser } = useSelector((state) => state);
  const [isPorto, setisPorto] = useState(true);

  useEffect(() => {
    if (router.query.tab === "experience") {
      setisPorto(false);
    } else {
      setisPorto(true);
    }
  }, [router.query.tab]);

  return (
    <>
      <Head>
        <title>GoHired - Profile</title>
        <meta name="description" content="Home page contains list worker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {detailUser.data.id && (
        <>
          {detailUser.data.level === 1 ? (
            <h1>Admin</h1>
          ) : (
            <ProfileWorker id={id} isPorto={isPorto} detailUser={detailUser} />
          )}
        </>
      )}
      <br />
    </>
  );
};

Profile.layout = "L1";

export default Profile;
