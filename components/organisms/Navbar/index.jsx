import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2";
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
        <Link href="/auth/register">
          <a className={`${styles.register} nav-link`}>Daftar</a>
        </Link>
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
        confirmButtonText: "Yes, Keluar!",
      }).then((result) => {
        if (result.isConfirmed) {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/auth/login");
        }

        return 0;
      });
    };

    if (token) {
      setNav(
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1 my-1">
            <Link href={`/home`}>
              <a className={`nav-link`}>List Pekerja</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <Link href={`/profile/${id}`}>
              <a className={`nav-link`}>Profile Saya</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <button className="btn nav-link" onClick={logout}>
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
        <a className="navbar-brand" href="#" style={{ color: "#5E50A1" }}>
          GoHired
        </a>
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
