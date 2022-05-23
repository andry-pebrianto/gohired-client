import React from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/worker`,
      {
        headers: {
          token: context.req.cookies.token,
        },
      }
    );

    return {
      props: {
        data: res.data.data,
        pagination: res.data.pagination,
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

const Home = (props) => {
  return (
    <>
      <Head>
        <title>GoHired - Home</title>
        <meta name="description" content="Home page contains list worker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.top}>
        <div className="container py-3">
          <h3 className="fw-bold m-0">Top Jobs</h3>
        </div>
      </div>
      <div className="container my-5" style={{ maxWidth: "800px" }}>
        <form className="d-flex mx-auto">
          <input
            className="form-control p-2 me-2"
            type="search"
            placeholder="Search for name, email, or skill"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="mt-5 bg-white">
          {props.data.map((worker) => (
            <div
              key={worker.id}
              className={`${styles.worker} row p-3 mb-2 mx-3 mx-md-0`}
            >
              <div className="col-12 col-sm-6 col-md-9">
                <div className="row">
                  <div className="col-sm-12 col-md-3 text-end my-2">
                    <div
                      style={{ position: "relative", height: 120, width: 120 }}
                    >
                      {worker.photo ? (
                        <Image
                          src={`https://drive.google.com/uc?export=view&id=${worker.photo}`}
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
                  </div>
                  <div className="col-sm-12 col-md-9 my-2">
                    <div className="d-flex align-items-center h-100">
                      <div>
                        <div className={styles.title}>{worker.name}</div>
                        {worker.job_desk && (
                          <small className="text-secondary">
                            {worker.job_desk}
                          </small>
                        )}
                        {worker.address && (
                          <div className="text-secondary">
                            <small>
                              <FaMapMarkerAlt /> {worker.address}
                            </small>
                          </div>
                        )}
                        <div className="mt-2">
                          {worker.skills && (
                            <>
                              {worker.skills.map((skill, index) => (
                                <div
                                  key={worker.id + index}
                                  className={`${styles.skill} my-1 mx-1`}
                                >
                                  {skill}
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Link href={`/profile/${worker.slug}`}>
                    <a
                      className="btn p-2 text-light my-2"
                      style={{ backgroundColor: "#5E50A1" }}
                    >
                      Lihat Profile
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Home.layout = "L1";

export default Home;
