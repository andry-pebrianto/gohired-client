import axios from 'axios';

export const editProfile = async (slug, token, data, setErrors) => {
  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/${slug}/profile`, data, {
      headers: {
        token,
      }
    });

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
