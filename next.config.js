/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "gohired.herokuapp.com",
      "images227.netlify.app",
      "drive.google.com",
      "ankasa-ticket.herokuapp.com",
      "https://drive.google.com/drive/u/0/folders/1FySMSQU2Y0qECTQbNOVMTto5nQA0Ex6a",
    ],
    formats: ["image/webp", "image/webp", "image/webp", "image/webp"],
  },
};

module.exports = nextConfig;
