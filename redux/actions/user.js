import axios from "axios";
import {
  GET_LIST_WORKER_PENDING,
  GET_LIST_WORKER_SUCCESS,
  GET_LIST_WORKER_FAILED,
  GET_LIST_RECRUITER_PENDING,
  GET_LIST_RECRUITER_SUCCESS,
  GET_LIST_RECRUITER_FAILED,
} from "../../redux/actions/types";

export const getListWorker = (token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LIST_WORKER_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/worker`,
      {
        headers: {
          token,
        },
      }
    );

    dispatch({
      type: GET_LIST_WORKER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_LIST_WORKER_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};

export const getListRecruiter = (token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LIST_RECRUITER_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/recruiter`,
      {
        headers: {
          token,
        },
      }
    );

    dispatch({
      type: GET_LIST_RECRUITER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_LIST_RECRUITER_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};

export const editProfile = async (slug, token, data, setErrors) => {
  try {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${slug}/profile`,
      data,
      {
        headers: {
          token,
        },
      }
    );

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const editPhoto = async (slug, token, data, setErrors) => {
  try {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${slug}/photo`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data", token },
      }
    );

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};
