import Image from "next/image";
import moment from "moment";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaGithub,
} from "react-icons/fa";
import styles from "../../../styles/Profile.module.css";
import Link from "next/link";

export default function ProfileWorker({ id, isPorto, detailUser }) {
  return (
    <div className="container-fluid p-0">
      <div className={styles["back-purple"]}></div>
      <div className="row mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="col-12 col-md-4">
          <div
            className={`${styles["profile-left"]} w-100 p-3`}
            style={{ border: "1px solid gray" }}
          >
            <div
              className="mx-auto"
              style={{ position: "relative", height: 120, width: 120 }}
            >
              {detailUser.data.photo ? (
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${detailUser.data.photo}`}
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
            <h5 className="mt-3">{detailUser.data.name}</h5>
            {detailUser.data.job_desk && (
              <div className="mb-1">
                <small>{detailUser.data.job_desk}</small>
              </div>
            )}
            {detailUser.data.address && (
              <div className="text-secondary">
                <small>
                  <FaMapMarkerAlt /> {detailUser.data.address}
                </small>
              </div>
            )}
            {detailUser.data.job_type && (
              <div className="text-secondary">
                <small>{detailUser.data.job_type}</small>
              </div>
            )}
            {detailUser.data.description && (
              <div className="text-secondary mt-2">
                <small>{detailUser.data.description}</small>
              </div>
            )}
            {id === detailUser.data.id && (
              <Link href={`/profile/edit/${detailUser.data.id}`}>
                <a className="btn mt-4 my-2 text-white w-100 bg-purple">
                  Edit Profile
                </a>
              </Link>
            )}
            <h5 className="mt-3">Skills</h5>
            <div className="my-2">
              {detailUser.data.skills && (
                <>
                  {detailUser.data.skills.map((skill, index) => (
                    <div
                      key={detailUser.data.id + index}
                      className={`${styles.skill} my-1 mx-1`}
                    >
                      {skill}
                    </div>
                  ))}
                </>
              )}
            </div>
            {detailUser.data.email && (
              <div className="text-secondary">
                <FaRegEnvelope /> <small>{detailUser.data.email}</small>
              </div>
            )}
            {detailUser.data.instagram && (
              <div className="text-secondary">
                <FaInstagram /> <small>{detailUser.data.instagram}</small>
              </div>
            )}
            {detailUser.data.github && (
              <div className="text-secondary">
                <FaGithub /> <small>{detailUser.data.github}</small>
              </div>
            )}
            {detailUser.data.linkedin && (
              <div className="text-secondary">
                <FaLinkedin /> <small>{detailUser.data.linkedin}</small>
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div
            className={`${styles["profile-right"]} w-100 p-3`}
            style={{ border: "1px solid gray" }}
          >
            <div className="d-flex">
              <Link href={`/profile/${detailUser.data.id}`}>
                <h5
                  className={`${styles.tab} me-2 ${
                    !isPorto && "text-secondary"
                  }`}
                >
                  <a>Portofolio</a>
                </h5>
              </Link>
              <Link href={`/profile/${detailUser.data.id}?tab=experience`}>
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
                {detailUser.data.projects.length ? (
                  <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    {detailUser.data.projects.map((project) => (
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
                ) : (
                  <h5>Tidak ditemukan portofolio.</h5>
                )}
              </>
            ) : (
              <>
                {detailUser.data.experiences.length ? (
                  <>
                    {detailUser.data.experiences.map((exp) => (
                      <>
                        <div key={exp.id} className="row mb-3">
                          <div className="d-none d-sm-block col-12 col-sm-4 col-lg-3">
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
                          <div className="col-12 col-sm-8  col-lg-9">
                            <h5>{exp.position}</h5>
                            <p className="m-0">{exp.company}</p>
                            <p className="text-secondary">
                              <small>
                                {moment(exp.start_date).format("LL")}
                              </small>{" "}
                              -{" "}
                              <small>{moment(exp.end_date).format("LL")}</small>
                            </p>
                            <p>{exp.description}</p>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <h5>Tidak ditemukan pengalaman.</h5>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
