import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaGithub,
} from "react-icons/fa";
import styles from "../../styles/Profile.module.css";

export async function getServerSideProps(context) {
  try {
    const slug = context.query.slug;

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${slug}`,
      {
        headers: {
          token: context.req.cookies.token,
        },
      }
    );

    return {
      props: {
        data: res.data.data,
        error: false,
        errorMessage: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
        errorMessage: error.message,
      },
    };
  }
}

const Profile = ({ data }) => {
  console.log(data);

  return (
    <>
      <Head>
        <title>GoHired - Profile</title>
        <meta name="description" content="Home page contains list worker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid p-0">
        <div className={styles["back-purple"]}></div>
        <div className="row mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="col-4">
            <div
              className={`${styles["profile-left"]} w-100 p-3`}
              style={{ border: "1px solid gray" }}
            >
              <div
                className="mx-auto"
                style={{ position: "relative", height: 120, width: 120 }}
              >
                {data.photo ? (
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${data.photo}`}
                    className="rounded-circle"
                    layout="fill"
                    alt="Gambar Profile"
                  />
                ) : (
                  <Image
                    src="https://images227.netlify.app/mernuas/default.jpg"
                    className="rounded-circle"
                    layout="fill"
                    alt="Gambar Profile"
                  />
                )}
              </div>
              <h5 className="mt-3">{data.name}</h5>
              {data.address && (
                <div className="text-secondary">
                  <small>
                    <FaMapMarkerAlt /> {data.address}
                  </small>
                </div>
              )}
              {data.job_desk && (
                <div className="text-secondary">
                  <small>{data.job_desk}</small>
                </div>
              )}
              {data.description && (
                <div className="text-secondary mt-2">
                  <small>{data.description}</small>
                </div>
              )}
              <button
                className="btn mt-4 my-2 text-white w-100"
                style={{ backgroundColor: "#5E50A1" }}
              >
                Hire
              </button>
              <h5 className="mt-3">Skills</h5>
              <div className="my-2">
                {data.skills && (
                  <>
                    {data.skills.map((skill, index) => (
                      <div
                        key={data.id + index}
                        className={`${styles.skill} my-1 mx-1`}
                      >
                        {skill}
                      </div>
                    ))}
                  </>
                )}
              </div>
              {data.email && (
                <div className="text-secondary">
                  <FaRegEnvelope /> <small>{data.email}</small>
                </div>
              )}
              {data.instagram && (
                <div className="text-secondary">
                  <FaInstagram /> <small>{data.instagram}</small>
                </div>
              )}
              {data.github && (
                <div className="text-secondary">
                  <FaGithub /> <small>{data.github}</small>
                </div>
              )}
              {data.linkedin && (
                <div className="text-secondary">
                  <FaLinkedin /> <small>{data.linkedin}</small>
                </div>
              )}
            </div>
          </div>
          <div className="col-8">
            <div className={`${styles["profile-right"]} w-100 p-3`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.layout = "L1";

export default Profile;
