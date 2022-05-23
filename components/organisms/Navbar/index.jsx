import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ token = null, slug = null }) {
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
    if (token) {
      setNav(
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1 my-1">
            <Link href={`/profile/${slug}`}>
              <a className={`nav-link`}>Profile Saya</a>
            </Link>
          </li>
        </ul>
      );
    }
  }, [slug, token]);

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
