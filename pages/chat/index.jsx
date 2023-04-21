import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { wrapper } from "../../redux/store";
import {
  GET_DETAIL_USER_FAILED,
  GET_DETAIL_USER_SUCCESS,
} from "../../redux/actions/types";
import styles from "../../styles/Chat.module.css";
import { getDetailReceiver, getListUserChat } from "../../redux/actions/user";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // get api and save to redux during ssr
    try {
      const { id } = context.req.cookies;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          headers: {
            token: context.req.cookies.token,
          },
        }
      );

      store.dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: GET_DETAIL_USER_FAILED,
        payload: error.message,
      });
    }

    return {
      props: {
        token: context.req.cookies.token,
        id: context.req.cookies.id,
        level: context.req.cookies.level,
      },
    };
  }
);

const Chat = ({ token, id, level }) => {
  const dispatch = useDispatch();
  const { listUserChat, detailUser, detailReceiver } = useSelector(
    (state) => state
  );

  const [socketio, setSocketio] = useState(null);
  const [message, setMessage] = useState("");
  const [listChat, setListChat] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState("");
  const [editChat, setEditChat] = useState("");
  const [editChatData, setEditChatData] = useState(null);

  useEffect(() => {
    dispatch(getListUserChat(level, token));
  }, [dispatch, level, token]);

  // refresh list message every 'send-message-response' socket triggered
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL);
    socket.on("send-message-response", (response) => {
      const receiver = localStorage.getItem("receiver");

      if (response.length) {
        if (
          receiver === response[0].sender_id ||
          receiver === response[0].receiver_id
        ) {
          setListChat(response);

          if (!response[0].noScroll) {
            setTimeout(() => {
              const elem = document.getElementById("chatMenuMessage");
              elem.scrollTop = elem.scrollHeight;
            }, 500);
          }
        }
      }
    });
    setSocketio(socket);
  }, []);

  // when any user selected for chat
  const selectReceiver = (receiverId) => {
    if (receiverId) {
      setListChat([]);
      dispatch(getDetailReceiver(receiverId, token));
      setActiveReceiver(receiverId);
      localStorage.setItem("receiver", receiverId);
      socketio.emit("join-room", id);
      socketio.emit("chat-history", {
        sender: id,
        receiver: receiverId,
      });
    } else {
      setActiveReceiver(receiverId);
    }
  };

  // function to send message
  const onSendMessage = (e) => {
    e.preventDefault();

    if (!message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Message empty!",
      });
      return;
    }

    const chatId = uuidv4();

    const data = {
      sender: id,
      receiver: activeReceiver,
      chat: message,
      id: chatId,
    };
    socketio.emit("send-message", data);

    const payload = {
      sender_id: id,
      receiver_id: activeReceiver,
      photo: detailUser.data.photo,
      created_at: new Date(),
      chat: message,
      is_deleted: false,
      id: chatId,
    };
    setListChat([...listChat, payload]);

    setMessage("");

    setTimeout(() => {
      const elem = document.getElementById("chatMenuMessage");
      elem.scrollTop = elem.scrollHeight;
    }, 100);
  };

  // function to delete message
  const onDeleteMessage = (chat) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          sender: chat.sender_id,
          receiver: chat.receiver_id,
          chatId: chat.id,
        };
        socketio.emit("delete-message", data);
      }
    });
  };

  // function to edit message
  const onEditMessage = (newChat, chat) => {
    if (!newChat) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Message empty!",
      });
      return;
    }

    const data = {
      sender: chat.sender_id,
      receiver: chat.receiver_id,
      chatId: chat.id,
      chat: newChat,
    };
    socketio.emit("edit-message", data);

    document.getElementById("close").click();
  };

  return (
    <>
      <Head>
        <title>GoHired - Chat</title>
        <meta name="description" content="Chat page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.chat} container-lg my-5`}>
        <div className="mb-3 d-md-none">
          {listUserChat.isLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <select
              onChange={(e) => selectReceiver(e.target.value)}
              className="form-select"
            >
              <option value="">Chat List</option>
              {listUserChat.data.map((userChat) => (
                <option key={userChat.id} value={userChat.id}>
                  {userChat.name}
                </option>
              ))}
            </select>
          )}
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
                {listUserChat.isLoading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <>
                    {listUserChat.data.length ? (
                      <>
                        {listUserChat.data.map((userChat) => (
                          <button
                            key={userChat.id}
                            className="btn w-100 border-0"
                            onClick={() => selectReceiver(userChat.id)}
                          >
                            <div className="row w-100">
                              <div className="col-12 col-md-4 col-lg-3">
                                <div className="d-flex justify-content-center ms-1">
                                  {userChat.photo ? (
                                    <img
                                      className={styles["profile-img"]}
                                      src={`https://drive.google.com/uc?export=view&id=${userChat.photo}`}
                                      alt="Gambar Profile"
                                    />
                                  ) : (
                                    <img
                                      className={styles["profile-img"]}
                                      src="https://images227.netlify.app/mernuas/default.jpg"
                                      alt="Gambar Profile"
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-12 col-md-8 col-lg-9">
                                <div className="d-flex h-100 align-items-center">
                                  <p className="fw-bold p-0 m-0">
                                    {userChat.name.split(" ")[0]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </>
                    ) : (
                      <h5 className="text-secondary">No history yet</h5>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className={`${styles.right} p-4 bg-white rounded border`}>
              {activeReceiver ? (
                <div
                  className="d-flex align-items-center"
                  style={{ height: "50px" }}
                >
                  {detailReceiver.isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <>
                      {detailReceiver.data.photo ? (
                        <img
                          className={styles["profile-img"]}
                          src={`https://drive.google.com/uc?export=view&id=${detailReceiver.data.photo}`}
                          alt="Gambar Profile"
                        />
                      ) : (
                        <img
                          className={styles["profile-img"]}
                          src="https://images227.netlify.app/mernuas/default.jpg"
                          alt="Gambar Profile"
                        />
                      )}
                      <h5 className="ms-2 mt-1 fw-bold">
                        {detailReceiver.data.name}
                      </h5>
                    </>
                  )}
                </div>
              ) : (
                <div
                  className="d-flex align-items-center"
                  style={{ height: "50px" }}
                >
                  <h5 className="fw-bold">No Chat Selected</h5>
                </div>
              )}
              <hr />
              <div
                className="overflow-auto"
                id="chatMenuMessage"
                style={{ height: "60vh" }}
              >
                {activeReceiver ? (
                  <>
                    {detailReceiver.isLoading ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <>
                        {listChat.length ? (
                          <>
                            {listChat.map((chat) => (
                              <div key={chat.id}>
                                {chat.sender_id === id ? (
                                  <div className="me-1">
                                    <div className="d-flex justify-content-end align-items-end mt-4">
                                      <div
                                        className={`${styles["ballon-right"]} me-2`}
                                      >
                                        {chat.is_deleted ? (
                                          <p className="p-0 m-0 text-secondary">
                                            <i>This message has been deleted</i>
                                          </p>
                                        ) : (
                                          <>
                                            <p className="p-0 m-0">
                                              {chat.chat}
                                            </p>
                                            <small
                                              className="text-secondary"
                                              style={{ fontSize: "13px" }}
                                            >
                                              {moment(chat.created_at).format(
                                                "LLL"
                                              )}
                                            </small>
                                          </>
                                        )}
                                      </div>
                                      {chat.photo ? (
                                        <img
                                          className={styles["profile-img"]}
                                          src={`https://drive.google.com/uc?export=view&id=${chat.photo}`}
                                          alt="Gambar Profile"
                                        />
                                      ) : (
                                        <img
                                          className={styles["profile-img"]}
                                          src="https://images227.netlify.app/mernuas/default.jpg"
                                          alt="Gambar Profile"
                                        />
                                      )}
                                    </div>
                                    {!chat.is_deleted && (
                                      <div
                                        className="d-flex justify-content-end w-100"
                                        style={{ marginTop: "-12px" }}
                                      >
                                        <span
                                          className="text-primary cursor-pointer mt-3 me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#editChat"
                                          onClick={() => {
                                            setEditChat(chat.chat);
                                            setEditChatData(chat);
                                          }}
                                        >
                                          Edit
                                        </span>

                                        {/* Modal Edit Chat */}
                                        <div
                                          className="modal fade"
                                          id="editChat"
                                          tabIndex="-1"
                                          aria-labelledby="editChatLabel"
                                          aria-hidden="true"
                                        >
                                          <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <h5
                                                  className="modal-title"
                                                  id="editChatLabel"
                                                >
                                                  Edit Chat
                                                </h5>
                                                <button
                                                  type="button"
                                                  className="btn-close"
                                                  data-bs-dismiss="modal"
                                                  aria-label="Close"
                                                />
                                              </div>
                                              <div className="modal-body">
                                                <input
                                                  className="form-control"
                                                  type="text"
                                                  value={editChat}
                                                  onChange={(e) =>
                                                    setEditChat(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="modal-footer">
                                                <button
                                                  type="button"
                                                  className="btn btn-secondary"
                                                  data-bs-dismiss="modal"
                                                  id="close"
                                                >
                                                  Close
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn bg-purple text-white"
                                                  onClick={() =>
                                                    onEditMessage(
                                                      editChat,
                                                      editChatData
                                                    )
                                                  }
                                                >
                                                  Save changes
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Modal Edit Chat */}

                                        <span
                                          className="text-danger cursor-pointer mt-3"
                                          onClick={() => onDeleteMessage(chat)}
                                          style={{ marginRight: "65px" }}
                                        >
                                          Delete
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="ms-1">
                                    <div className="d-flex justify-content-start align-items-end mt-4">
                                      {chat.photo ? (
                                        <img
                                          className={styles["profile-img"]}
                                          src={`https://drive.google.com/uc?export=view&id=${chat.photo}`}
                                          alt="Gambar Profile"
                                        />
                                      ) : (
                                        <img
                                          className={styles["profile-img"]}
                                          src="https://images227.netlify.app/mernuas/default.jpg"
                                          alt="Gambar Profile"
                                        />
                                      )}
                                      <div
                                        className={`${styles["ballon-left"]} ms-2`}
                                      >
                                        {chat.is_deleted ? (
                                          <p className="p-0 m-0 text-light">
                                            <i>This message has been deleted</i>
                                          </p>
                                        ) : (
                                          <>
                                            <p className="p-0 m-0">
                                              {chat.chat}
                                            </p>
                                            <small
                                              className="text-light"
                                              style={{ fontSize: "13px" }}
                                            >
                                              {moment(chat.created_at).format(
                                                "LLL"
                                              )}
                                            </small>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </>
                        ) : (
                          <h5 className="text-secondary">No message yet</h5>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <h5 className="text-secondary">
                    Please select a chat to start messaging
                  </h5>
                )}
              </div>
              <hr />
              <form onSubmit={onSendMessage}>
                <div className="input-group w-100">
                  <input
                    className="form-control bg-light border-0"
                    id="message"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
    </>
  );
};

Chat.layout = "L1";

export default Chat;
