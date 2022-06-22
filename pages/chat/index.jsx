import React from "react";
import styles from "../../styles/Chat.module.css";

const Chat = () => {
  return (
    <div className={`${styles.chat} container-lg my-5`}>
      <div className="mb-3 d-md-none">
        <select
          className="form-select form-select-lg"
        >
          <option value="">Chat List</option>
          <option value="1">Andry Pebrianto Update</option>
        </select>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block">
          <div className={`${styles.left} p-4 bg-white rounded border`}>
            <div
              className="d-flex align-items-center"
              style={{ height: "50px" }}
            >
              <h5 className="fw-bold">Chat List</h5>
            </div>
            <hr />
            <div className="overflow-auto" style={{ height: "70vh" }}>
              <button className="btn w-100 border-0">
                <div>
                  <div className="row w-100">
                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="d-flex justify-content-center">
                        <img
                          className={styles['profile-img']}
                          src="https://images227.netlify.app/mernuas/default.jpg"
                          alt="Gambar Profile"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                      <div className="d-flex h-100 align-items-center">
                        <p className="fw-bold p-0 m-0">Andry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className={`${styles.right} p-4 bg-white rounded border`}>
            <div
              className="d-flex align-items-center"
              style={{ height: "50px" }}
            >
              <img
                className={styles['profile-img']}
                src="https://images227.netlify.app/mernuas/default.jpg"
                alt="Gambar Profile"
              />
              <h5 className="ms-2 mt-1 fw-bold">Andry Pebrianto</h5>
            </div>
            <hr />
            <div className="overflow-auto" style={{ height: "60vh" }}>
              <div className="d-flex justify-content-end align-items-end mt-4">
                <div className={`${styles['ballon-right']} me-2`}>
                  <p className="p-0 m-0">Halo Kawan</p>
                  <small
                    className="text-secondary"
                    style={{ fontSize: "13px" }}
                  >
                    12 April 2022
                  </small>
                </div>
                <img
                  className={styles['profile-img']}
                  src="https://images227.netlify.app/mernuas/default.jpg"
                  alt="Gambar Profile"
                />
              </div>
              <div className="d-flex justify-content-start align-items-end mt-4">
                <img
                  className={styles['profile-img']}
                  src="https://images227.netlify.app/mernuas/default.jpg"
                  alt="Gambar Profile"
                />
                <div className={`${styles['ballon-left']} ms-2`}>
                  <p className="p-0 m-0">Halo Kawan</p>
                  <small className="text-light" style={{ fontSize: "13px" }}>
                    12 April 2022
                  </small>
                </div>
              </div>
            </div>
            <hr />
            <form>
              <div className="input-group w-100">
                <input
                  className="form-control bg-light border-0"
                  id="message"
                  placeholder="Type your message"
                />
                <button type="submit" className="btn text-white bg-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Chat.layout = "L1";

export default Chat;
