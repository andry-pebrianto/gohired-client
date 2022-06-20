import React from "react";
import axios from "axios";
import styles from "../styles/Landing.module.css";

export async function getStaticProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      data: response.data,
    },
    revalidate: 10,
  };
}

const Landing = ({ data }) => {
  console.log(data);
  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <br />
      <div className="container my-5">
        <div className={`${styles.banner} row d-flex align-items-center mb-5 px-3 px-md-0`}>
          <div className="col-12 col-md-7 col-lg-6">
            <p className="display-5 fw-bold">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              architecto eveniet corporis sunt est ipsum delectus, perferendis
              perspiciatis. Fugiat, officiis.
            </p>
            <div
              className="btn btn-lg text-white"
              style={{ backgroundColor: "#5E50A1" }}
            >
              Mulai Dari Sekarang
            </div>
          </div>
          <div className="col-md-5 col-lg-6 d-none d-md-block">
            <div className="d-flex justify-content-end">
              <div className="position-relative">
                <img
                  className={`${styles['z-index']} position-absolute`}
                  src="https://images227.netlify.app/gohired/landing1.webp"
                  alt="Gambar Landing 1"
                />
                <div className={`${styles.box1}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-lg">
        <div className={`${styles.why} row mb-5`}>
          <div className="col-12 col-md-6">
            <div className="position-relative d-flex align-items-center justify-content-center h-100">
              <img
                className={`${styles['z-index']} position-absolute`}
                src="https://images227.netlify.app/gohired/landing2.webp"
                alt="Gambar Landing 2"
              />
              <div className={styles.box2}></div>
            </div>
          </div>
          <div className={`${styles.side} col-12 col-md-6`}>
            <h1 className="fw-bold mb-5">
              Kenapa harus mencari tallent di GoHired
            </h1>
            <ul className="list-unstyled mt-4 text-start">
              <li className="mb-3">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                      fill="#5E50A1"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                      fill="#5E50A1"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                      fill="#5E50A1"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                      fill="#5E50A1"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                      fill="#5E50A1"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-lg">
        <div className={`${styles.skill} row mb-5`}>
          <div className={`${styles.side} col-12 col-md-6`}>
            <h1 className="fw-bold">Skill Talent</h1>
            <p className="text-secondary text-start mt-3 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              distinctio facilis dignissimos officiis numquam ullam quo,
              consequuntur quae molestiae aperiam.
            </p>
            <div className="row mb-2">
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">Java</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">Golang</p>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">Kotlin</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">C++</p>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">PHP</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">Ruby</p>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">Javascript</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3682 21.7515C17.6957 24.7494 6.2288 24.7494 2.63131 21.7515C-1.04112 18.7536 -0.666388 5.93762 2.63131 2.56499C5.929 -0.807635 18.0705 -0.807635 21.3682 2.56499C24.6659 5.93762 25.0406 18.7537 21.3682 21.7515Z"
                      fill="#FBB017"
                    />
                    <g opacity="0.2">
                      <path
                        opacity="0.2"
                        d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ms-2">10+ Bahasa Lainnya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="position-relative d-flex align-items-center justify-content-center h-100">
              <img
                className={`${styles['z-index']} position-absolute`}
                src="https://images227.netlify.app/gohired/landing3.webp"
                alt="Gambar Landing 3"
              />
              <div className={styles.box3}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles["slider-container"]}`}>
        <h1 className="fw-bold text-center mb-3">
          Their opinion about peworld
        </h1>
      </div>
      <div className={`container ${styles['invitation-container']}`}>
        <div className={styles.invitation}>
          <div className="d-block d-md-flex justify-content-between">
            <h3 style={{ maxWidth: "300px" }}>Lorem ipsum dolor sit amet.</h3>
            <br />
            <div className="d-flex align-items-center">
              <button className="btn bg-light py-3">Mulai Dari Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer} text-light`}>
        <h2>Icon GoHired</h2>
        <p className="mt-3 mb-5" style={{ maxWidth: "350px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio
          corporis qui odit nisi mollitia!
        </p>
        <hr style={{ height: "2px" }} />
        <div className="d-flex justify-content-between mt-4">
          <p className="m-0 p-0">Copyright © 2020 GoHired</p>
          <div className="d-none d-sm-block">
            <a className="text-light me-5" href="#">
              Telepon
            </a>
            <a className="text-light" href="#">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

Landing.layout = "L1";

export default Landing;
