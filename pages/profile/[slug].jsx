import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaGithub,
} from "react-icons/fa";
import styles from "../../styles/Profile.module.css";
import Link from "next/link";

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
        slug: context.req.cookies.slug || null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
        errorMessage: error.message,
        slug: context.req.cookies.slug || null,
      },
    };
  }
}

const Profile = ({ data, slug }) => {
  console.log(data);
  const router = useRouter();
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
      <div className="container-fluid p-0">
        <div className={styles["back-purple"]}></div>
        <div className="row mx-auto" style={{ maxWidth: "1200px" }}>
          {data ? (
            <>
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
                  {data.job_desk && (
                    <div className="mb-1">
                      <small>{data.job_desk}</small>
                    </div>
                  )}
                  {data.address && (
                    <div className="text-secondary">
                      <small>
                        <FaMapMarkerAlt /> {data.address}
                      </small>
                    </div>
                  )}
                  {data.job_type && (
                    <div className="text-secondary">
                      <small>{data.job_type}</small>
                    </div>
                  )}
                  {data.description && (
                    <div className="text-secondary mt-2">
                      <small>{data.description}</small>
                    </div>
                  )}
                  {slug === data.slug && (
                    <Link href={`/profile/edit/${data.slug}`}>
                      <a
                        className="btn mt-4 my-2 text-white w-100"
                        style={{ backgroundColor: "#5E50A1" }}
                      >
                        Edit Profile
                      </a>
                    </Link>
                  )}
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
                <div className={`${styles["profile-right"]} w-100 p-3`}>
                  <div className="d-flex">
                    <Link href={`/profile/${data.slug}`}>
                      <h5
                        className={`${styles.tab} me-2 ${
                          !isPorto && "text-secondary"
                        }`}
                      >
                        <a>Portofolio</a>
                      </h5>
                    </Link>
                    <Link href={`/profile/${data.slug}?tab=experience`}>
                      <h5
                        className={`${styles.tab} ms-2 ${
                          isPorto && "text-secondary"
                        }`}
                      >
                        <a>Pengalaman kerja</a>
                      </h5>
                    </Link>
                  </div>
                  <hr />
                  {isPorto ? (
                    <>
                      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                        {data.projects.map((project) => (
                          <div key={project.id} className="col">
                            <div className="card">
                              <div
                                className="mx-auto"
                                style={{
                                  position: "relative",
                                  height: 150,
                                  width: "100%",
                                }}
                              >
                                {project.photo ? (
                                  <Image
                                    src={`https://drive.google.com/uc?export=view&id=${project.photo}`}
                                    layout="fill"
                                    alt="Gambar Profile"
                                  />
                                ) : (
                                  <Image
                                    src="https://ankasa-ticket.herokuapp.com/ticket.jpg"
                                    layout="fill"
                                    alt="Gambar Profile"
                                  />
                                )}
                              </div>
                              <div className="card-body">
                                <p className="card-title text-center">
                                  {project.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {data.experiences.map((exp) => (
                        <>
                          <div key={exp.id} className="row mb-3">
                            <div className="col-2">
                              <div
                                className="mx-auto"
                                style={{
                                  position: "relative",
                                  height: 100,
                                  width: 100,
                                }}
                              >
                                {exp.photo ? (
                                  <Image
                                    src={`https://drive.google.com/uc?export=view&id=${exp.photo}`}
                                    layout="fill"
                                    alt="Gambar Profile"
                                  />
                                ) : (
                                  <Image
                                    src="https://ankasa-ticket.herokuapp.com/ticket.jpg"
                                    layout="fill"
                                    alt="Gambar Profile"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-10">
                              <h5>{exp.position}</h5>
                              <p className="m-0">{exp.company}</p>
                              <p className="text-secondary">
                                <small>
                                  {moment(exp.start_date).format("LL")}
                                </small>{" "}
                                -{" "}
                                <small>
                                  {moment(exp.end_date).format("LL")}
                                </small>
                              </p>
                              <p>{exp.description}</p>
                            </div>
                          </div>
                          <hr />
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <h1>User Tidak Ditemukan</h1>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

Profile.layout = "L1";

export default Profile;
