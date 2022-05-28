import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { register } from "../../redux/actions/auth";
import { createToast } from "../../utils/createToast";
import SideAuth from "../../components/molecules/SideAuth";
import RegisterForm from "../../components/organisms/RegisterForm";

const Register = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password) {
      setErrors([{ msg: "All field required (*) must be filled" }]);
    } else if (form.password !== form.passwordConfirm) {
      setErrors([{ msg: "Password & Password Confirm not same" }]);
    } else {
      setErrors([]);
      setIsLoading(true);

      const registerStatus = await register(form, setErrors);
      if (registerStatus) {
        createToast(
          "Register Success, Please Activate Your Account Through Link From Email",
          "success"
        );
        router.push("/auth/login");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>GoHired - Register</title>
        <meta name="description" content="Register page for GoHired" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="row">
          <SideAuth />
          <RegisterForm
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

export default Register;
