import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaGithub,
} from "react-icons/fa";
import styles from "../../../styles/Profile.module.css";
import Link from "next/link";

export default function ProfileRecruiter({ id,  detailUser }) {
  return (
    <div className="container-fluid p-0 mb-4">
      <div className={styles["back-purple"]}></div>
      <div className="row mx-auto" style={{ maxWidth: "650px" }}>
        <div className="col-12">
          <div
            className={`${styles["profile-left"]} w-100 p-3 text-center`}
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
            <h5 className="mt-3">{detailUser.data.name} | {detailUser.data.company_name}</h5>
            {detailUser.data.position && (
              <div className="mb-1">
                <small>{detailUser.data.position}</small>
              </div>
            )}
            {detailUser.data.address && (
              <div className="text-secondary">
                <small>
                  <FaMapMarkerAlt /> {detailUser.data.address}
                </small>
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
      </div>
    </div>
  );
}
