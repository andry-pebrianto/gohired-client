import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import Logo from "../../../public/img/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar({ token = null, id = null }) {
  const router = useRouter();

  const [Nav, setNav] = useState(
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item mx-1 my-1">
        <Link href="/auth/login">
          <a className={`${styles.login} nav-link`}>Masuk</a>
        </Link>
      </li>
      <li className="nav-item mx-1 my-1">
        <div className="dropdown">
          <button
            className={`${styles.register} nav-link dropdown-toggle`}
            type="button"
            id="registerDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Daftar
          </button>
          <ul className="dropdown-menu" aria-labelledby="registerDropdown">
            <li>
              <Link href="/auth/register/worker">
                <a className="dropdown-item">Pekerja</a>
              </Link>
            </li>
            <div className="dropdown-divider"></div>
            <li>
              <Link href="/auth/register/recruiter">
                <a className="dropdown-item">Perekrut</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );

  useEffect(() => {
    const logout = () => {
      Swal.fire({
        title: "Apakah anda yakin?",
        text: "Anda akan keluar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!",
      }).then((result) => {
        if (result.isConfirmed) {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "level=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/auth/login");
        }

        return 0;
      });
    };

    if (token) {
      setNav(
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1 my-1">
            <Link href={`/home/worker`}>
              <a className={`nav-link`}>List Pekerja</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <Link href={`/home/recruiter`}>
              <a className={`nav-link`}>List Perekrut</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <Link href={`/profile/${id}`}>
              <a className={`nav-link`}>Profile Saya</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <button
              className="btn bg-purple text-white nav-link"
              onClick={logout}
            >
              Keluar
            </button>
          </li>
        </ul>
      );
    }
  }, [router, id, token]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" style={{ color: "#5E50A1" }}>
            <div className="d-flex align-items-center">
              <div style={{ position: "relative", height: 35, width: 35 }}>
                <Image src={Logo} layout="fill" alt="GoHired Logo" />
              </div>
              <span className="ms-2">GoHired</span>
            </div>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {Nav}
        </div>
      </div>
    </nav>
  );
}
