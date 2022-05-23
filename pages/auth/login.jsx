import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";
import { login } from "../../redux/actions/auth";
import { createToast } from "../../utils/createToast";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setErrors([{ msg: "All field required (*) must be filled" }]);
    } else {
      setErrors([]);
      setIsLoading(true);

      const loginStatus = await login(form, setErrors);
      if (loginStatus) {
        createToast("Login Success", "success");
        router.push("/");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>GoHired - Login</title>
        <meta name="description" content="Login page for GoHired" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.side} col-sm-5 col-md-6 d-none d-sm-flex`}>
            <div
              className={`${styles.content} mx-1 mx-md-2 mx-lg-5 text-white w-100`}
            >
              <div className={styles.icon}>
                <p>GoHired</p>
              </div>
              <h1 className="fw-bold">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
          </div>
          <div className={`${styles.auth} ${styles.login} col-sm-7 col-md-6`}>
            <div className={styles.content}>
              <div className="d-sm-none text-center mb-5">
                <p>GoHired</p>
              </div>
              <h1 className="fs-4 fw-bold mb-3">Hello, Pewpeople</h1>
              <h2 className="fs-6 text-secondary mb-4">
                Login ke akun anda yang telah terdaftar
              </h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    * E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm p-3"
                    id="email"
                    placeholder="Masukkan alamat E-mail"
                    value={form.email}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    * Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm p-3"
                    id="password"
                    placeholder="Masukkan kata sandi"
                    value={form.password}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-end mb-3">
                  <a className="link-secondary text-decoration-none" href="#">
                    Lupa kata sandi?
                  </a>
                </div>
                {errors.length > 0 && (
                  <div className="alert alert-danger mx-0 py-2">
                    <ul className="m-0">
                      {errors.map((error, index) => (
                        <li key={index}>{error.msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {isLoading ? (
                  <button
                    className="btn w-100 text-light mb-2"
                    type="submit"
                    style={{ backgroundColor: "#FBB017" }}
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
                    type="submit"
                    className="btn w-100 text-light mb-2"
                    style={{ backgroundColor: "#FBB017" }}
                  >
                    Log in
                  </button>
                )}
              </form>
              <p className="text-center text-secondary mt-4">
                Anda belum punya akun?{" "}
                <a
                  className="text-orange text-decoration-none"
                  href="/register.html"
                >
                  Daftar di sini
                </a>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
