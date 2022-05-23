import axios from 'axios';

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data,
    );

    document.cookie = `token=${res.data.token.jwt};path=/`;
    document.cookie = `slug=${res.data.token.slug};path=/`;

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

export const register = async (data, setErrors) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/worker`, data);

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
