import axios from "axios";

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data
    );

    document.cookie = `token=${res.data.token.jwt};path=/`;
    document.cookie = `id=${res.data.token.id};path=/`;
    document.cookie = `level=${res.data.token.level};path=/`;

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

export const register = async (data, setErrors, recruiter) => {
  try {
    // jika register sebagai recruiter
    if (recruiter) {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register/recruiter`,
        data
      );
    }

    // jika register sebagai worker
    else {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register/worker`,
        data
      );
    }

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

export const forgot = async (data, setErrors) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot`, data);

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

export const reset = async (token, data, setErrors) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset/${token}`,
      data
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
