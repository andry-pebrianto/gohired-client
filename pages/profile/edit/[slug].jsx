import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "../../../styles/Profile.module.css";
import { editProfile, editPhoto } from "../../../redux/actions/user";
import { createToast } from "../../../utils/createToast";

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
        token: context.req.cookies.token || null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
        errorMessage: error.message,
        token: context.req.cookies.token || null,
      },
    };
  }
}

const Edit = ({ data, token }) => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: data.name || "",
    address: data.address || "",
    jobDesk: data.job_desk || "",
    jobType: data.job_type || "",
    description: data.description || "",
    phone: data.phone || "",
    instagram: data.instagram || "",
    github: data.github || "",
    linkedin: data.linkein || "",
    skills: data.skills.join(",") || "",
  });
  const [photo, setPhoto] = useState(null);

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const photoChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = async () => {
    setErrors([]);
    setIsLoading(true);

    const editProfileStatus = await editProfile(
      data.slug,
      token,
      {
        ...form,
        skills: form.skills.trim().split(","),
      },
      setErrors
    );
    if (editProfileStatus) {
      createToast("Edit Profile Success", "success");
      router.push(`/profile/${data.slug}`);
    }

    setIsLoading(false);
    document.getElementById("close").click();
  };

  const onSubmitPhoto = async () => {
    document.getElementById("close").click();

    const formData = new FormData();
    if (photo) {
      formData.append("photo", photo);
    }

    setErrors([]);
    setIsLoading(true);

    const editPhotoStatus = await editPhoto(
      data.slug,
      token,
      formData,
      setErrors
    );
    if (editPhotoStatus) {
      createToast("Edit Photo Success", "success");
      router.push(`/profile/${data.slug}`);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>GoHired - Edit Profile</title>
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

                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Change Photo
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Change Photo Profile
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <input
                              type="file"
                              className="form-control"
                              onChange={photoChangeHandler}
                            />
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            id="close"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            onClick={onSubmitPhoto}
                            className="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
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
                </div>
                {isLoading ? (
                  <button
                    className="btn mt-3 text-white w-100"
                    type="submit"
                    style={{ backgroundColor: "#5E50A1" }}
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Loading...
                  </button>
                ) : (
                  <button
                    className="btn mt-3 text-white w-100"
                    style={{ backgroundColor: "#5E50A1" }}
                    onClick={onSubmit}
                  >
                    Simpan
                  </button>
                )}
                <button
                  className="btn mt-3 w-100"
                  style={{ color: "#5E50A1", borderColor: "#5E50A1" }}
                >
                  Batal
                </button>
              </div>
              <div className="col-8">
                <div
                  className={`${styles["profile-right"]} w-100 p-3`}
                  style={{ border: "1px solid gray" }}
                >
                  {errors.length > 0 && (
                    <div className="alert alert-danger mx-0 py-2">
                      <ul className="m-0">
                        {errors.map((error, index) => (
                          <li key={index}>{error.msg}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Data diri */}
                  <h5>Data Diri</h5>
                  <hr />
                  <form className="mb-5">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Masukkan nama lengkap"
                        value={form.name}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="jobDesk" className="form-label">
                        Job desk
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="jobDesk"
                        placeholder="Masukkan job desk"
                        value={form.jobDesk}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="jobType" className="form-label">
                        Job type
                      </label>
                      <select
                        className="form-select"
                        id="jobType"
                        value={form.jobType}
                        onChange={onInputChange}
                      >
                        <option value="Freelance">Freelance</option>
                        <option value="Fulltime">Fulltime</option>
                        <option value="Intern">Intern</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Alamat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Masukkan alamat"
                        value={form.address}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        No ponsel
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Masukkan no ponsel"
                        value={form.phone}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Deskripsi
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        cols="30"
                        rows="5"
                        placeholder="Masukkan deskripsi singkat"
                        onChange={onInputChange}
                        value={form.description}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="github" className="form-label">
                        Github
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="github"
                        placeholder="Masukkan url github"
                        value={form.github}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="linkedin" className="form-label">
                        Linkedin
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedin"
                        placeholder="Masukkan url linkedin"
                        value={form.linkedin}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="instagram" className="form-label">
                        Instagram
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="instagram"
                        placeholder="Masukkan url instagram"
                        value={form.instagram}
                        onChange={onInputChange}
                      />
                    </div>
                  </form>
                  {/* Skills */}
                  <h5>Skills</h5>
                  <hr />
                  <form className="mb-3">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="skills"
                        placeholder="Java, Python, Golang"
                        value={form.skills}
                        onChange={onInputChange}
                      />
                      <div id="skillHelp" className="form-text">
                        Pisahkan setiap skill menggunakan koma
                      </div>
                    </div>
                  </form>
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

Edit.layout = "L1";

export default Edit;
