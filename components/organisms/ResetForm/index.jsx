import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../../styles/Auth.module.css";
import Logo from "../../../public/img/logo.png";
import PasswordInput from "../../atoms/PasswordInput";

export default function ResetForm({
  form,
  onInputChange,
  onSubmit,
  isLoading,
  errors,
}) {
  return (
    <div className={`${styles.auth} ${styles.login} col-sm-7 col-md-6`}>
      <div className={styles.content}>
        <div className="d-sm-none text-center mb-5">
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ position: "relative", height: 40, width: 40 }}>
              <Image src={Logo} layout="fill" alt="GoHired Logo" />
            </div>
            <p className="ms-2 mt-3">GoHired</p>
          </div>
        </div>
        <h1 className="fs-4 fw-bold mb-3">Hello, Pewpeople</h1>
        <h2 className="fs-6 text-secondary mb-4">
          Pikirkan kata sandi yang mudah diingat, namun kuat
        </h2>
        <form onSubmit={onSubmit}>
          <PasswordInput
            password={form.password}
            setPassword={onInputChange}
            id="password"
            placeholder="Kata sandi"
          />
          <PasswordInput
            password={form.passwordConfirm}
            setPassword={onInputChange}
            id="passwordConfirm"
            placeholder="Konfirmasi Kata sandi"
          />
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
              Reset
            </button>
          )}
        </form>
        <p className="text-center text-secondary mt-4">
          Ingat kata sandi?{" "}
          <Link href="/auth/login">
            <a className="text-orange text-decoration-none">Masuk di sini</a>
          </Link>
        </p>
        <br />
      </div>
    </div>
  );
}
