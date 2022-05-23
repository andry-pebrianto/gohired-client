import axios from 'axios';

export const login = async (data, setErrors) => {
  try {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data,
    );

    document.cookie = `token=${res.data.token.jwt};path=/`;
    document.cookie = `id=${res.data.token.id};path=/`;

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
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data);

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
