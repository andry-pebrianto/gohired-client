import Image from "next/image";
import React from "react";
import axios from "axios";
import Landing1 from "../public/img/landing1.webp";
import Landing2 from "../public/img/landing2.webp";

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
      <div className="container my-5">
        <div className="row d-flex align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <p className="display-5">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              architecto eveniet corporis sunt est ipsum delectus, perferendis
              perspiciatis. Fugiat, officiis.
            </p>
            <button className="btn btn-lg text-white bg-purple">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-end">
              <div style={{ position: "relative", height: 420, width: 420 }}>
                <Image src={Landing1} layout="fill" alt="Landing 1" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-5">
          <div className="col-12 col-lg-5">
            <div style={{ position: "relative", height: 400, width: 450 }}>
              <Image src={Landing2} layout="fill" alt="Landing 2" />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h1 className="ms-3">Kenapa harus mencari tallent di GoHired</h1>
            <ul className="ms-3 list-unstyled mt-4">
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
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

Landing.layout = "L1";

export default Landing;
