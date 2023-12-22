"use client";

import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { default: Navbar } = require("@/components/navbar");

const LoginForm = ({ handleSubmit, handleInputChange, formData }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Joe.Doe@mail.com"
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-8 py-2 rounded-md mt-4 block mx-auto"
      >
        Signin
      </button>
    </form>
  );
};

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      router.push("/admin");
    } else {
      console.error("Error logging in to admin dashboard");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start w-full h-full bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 mt-8">Admin Dashboard</h2>
        <LoginForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      </div>

      <Footer />
    </>
  );
};

export default Signin;
