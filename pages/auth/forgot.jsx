import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { forgot } from "../../redux/actions/auth";
import { createToast } from "../../utils/createToast";
import SideAuth from "../../components/molecules/SideAuth";
import ForgotForm from "../../components/organisms/ForgotForm";

const Forgot = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.email) {
      setErrors([{ msg: "All field required (*) must be filled" }]);
    } else {
      setErrors([]);
      setIsLoading(true);

      const forgotStatus = await forgot(form, setErrors);
      if (forgotStatus) {
        createToast("Forgot Password Success, Please Reset Your Password Through Link From Email", "success");
        router.push("/auth/login");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>GoHired - Forgot Password</title>
        <meta name="description" content="Forgot Password page for GoHired" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="row">
          <SideAuth />
          <ForgotForm
            form={form}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            isLoading={isLoading}
            errors={errors}
          />
        </div>
      </div>
    </>
  );
};

export default Forgot;
