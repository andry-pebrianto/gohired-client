import React from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  const onBack = () => {
    router.push("/");
  };

  return (
    <>
      <h1>404</h1>
      <button onClick={() => onBack()}>Back To Home</button>
    </>
  );
}
