import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaMapMarkerAlt } from "react-icons/fa";
import { wrapper } from "../../redux/store";
import {
  GET_LIST_WORKER_SUCCESS,
  GET_LIST_WORKER_FAILED,
} from "../../redux/actions/types";
import Pagination from "../../components/molecules/Pagination";
import styles from "../../styles/Home.module.css";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // get api and save to redux during ssr
    try {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/user/worker?`;

      // set search query if exist
      if (context.query.search) {
        url += `&search=${context.query.search}`;
      }

      // set sort query if exist
      if (context.query.sort) {
        url += `&orderBy=${context.query.sort}`;
      }

      // set page query if exist
      if (context.query.page) {
        url += `&page=${context.query.page}`;
      }

      const response = await axios.get(url, {
        headers: {
          token: context.req.cookies.token,
        },
      });

      store.dispatch({
        type: GET_LIST_WORKER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: GET_LIST_WORKER_FAILED,
        payload: error.message,
      });
    }

    return {
      props: {
        token: context.req.cookies.token,
      },
    };
  }
);

const ListWorker = () => {
  const router = useRouter();
  const { listWorker } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");

  useEffect(() => {
    setSearchQuery("");
    if (router.query.search) {
      setSearchQuery(router.query.search);
    }

    if (router.query.sort) {
      setSortQuery(router.query.sort);
    }
  }, [router]);

  // useEffect untuk sort
  useEffect(() => {
    if (sortQuery) {
      applyFilter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortQuery]);

  const applyFilter = (page = "") => {
    let url = "/home/worker?";
    if (searchQuery) {
      url += `&search=${searchQuery}`;
    }
    if (sortQuery && sortQuery !== "batal") {
      url += `&sort=${sortQuery}`;
    }
    if (page) {
      url += `&page=${page}`;
    }

    router.push(url);
  };

  const search = (e) => {
    e.preventDefault();

    applyFilter();
  };

  return (
    <>
      <Head>
        <title>GoHired - List Worker</title>
        <meta name="description" content="List Worker page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.top}>
        <div className="container py-3">
          <h3 className="fw-bold m-0">Top Jobs</h3>
        </div>
      </div>
      <div className="container my-5" style={{ maxWidth: "800px" }}>
        <form className="d-flex mx-auto" onSubmit={search}>
          <input
            className="form-control p-2 me-2"
            type="search"
            placeholder="Cari berdasarkan nama, skill, job desk, address"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <select
            className="form-select me-2"
            onChange={(e) => setSortQuery(e.target.value)}
            style={{ width: "100px" }}
            value={sortQuery}
          >
            <option value="batal">Sort</option>
            <option value="name">Sortir berdasarkan nama</option>
            <option value="createdAt">
              Sortir berdasarkan tanggal bergabung
            </option>
          </select>
          <button className="btn bg-purple text-white" type="submit">
            Search
          </button>
        </form>
        <div className="mt-5 bg-white">
          {!listWorker.isError ? (
            <>
              {!listWorker.empty ? (
                <>
                  {listWorker.data.map((worker) => (
                    <div
                      key={worker.id}
                      className={`${styles.worker} row p-3 mb-2 mx-3 mx-md-0`}
                    >
                      <div className="col-12 col-sm-6 col-md-9">
                        <div className="row">
                          <div className="col-sm-12 col-md-3 text-end my-2">
                            <div
                              style={{
                                position: "relative",
                                height: 120,
                                width: 120,
                              }}
                            >
                              {worker.photo ? (
                                <Image
                                  src={`https://drive.google.com/uc?export=view&id=${worker.photo}`}
                                  className="rounded-circle"
                                  layout="fill"
                                  alt="Gambar Profile"
                                  unoptimized={true}
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
                          </div>
                          <div className="col-sm-12 col-md-9 my-2">
                            <div className="d-flex align-items-center h-100">
                              <div>
                                <div className={styles.title}>
                                  {worker.name}
                                </div>
                                {worker.job_desk && (
                                  <small className="text-secondary">
                                    {worker.job_desk}
                                  </small>
                                )}
                                {worker.address && (
                                  <div className="text-secondary">
                                    <small>
                                      <FaMapMarkerAlt /> {worker.address}
                                    </small>
                                  </div>
                                )}
                                <div className="mt-2">
                                  {worker.skills && (
                                    <>
                                      {worker.skills.map((skill, index) => (
                                        <div
                                          key={worker.id + index}
                                          className={`${styles.skill} my-1 mx-1`}
                                        >
                                          {skill}
                                        </div>
                                      ))}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-center h-100">
                          <Link href={`/profile/${worker.id}`}>
                            <a className="btn p-2 text-light my-2 bg-purple">
                              Lihat Profile
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h3>Sistem belum berhasil menemukan data yang relevan.</h3>
              )}
            </>
          ) : (
            <h3>{listWorker.error}</h3>
          )}
          <Pagination
            pagination={listWorker.pagination}
            applyFilter={applyFilter}
          />
        </div>
      </div>
    </>
  );
};

ListWorker.layout = "L1";

export default ListWorker;
