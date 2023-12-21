"use client";
import { useState } from "react";
const { default: Navbar } = require("@/components/navbar");
import Footer from "@/components/footer";

const RegisterForm = ({ handleSubmit, handleInputChange, formData }) => {
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
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-600"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-8 py-2 rounded-md mt-4 block mx-auto"
      >
        Create
      </button>
    </form>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    } else {
      console.log("Submitted: ", { formData });
    }
  };

  const MaybeRenderPasswordError = () => {
    return formData.password !== formData.confirmPassword ? (
      <div className="text-red-500">
        <p>Error! Password does not match</p>
      </div>
    ) : null;
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start w-full bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 mt-8">Create an account</h2>
        <RegisterForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        />
        <MaybeRenderPasswordError />
      </div>

      <Footer />
    </>
  );
};
export default Signup;
