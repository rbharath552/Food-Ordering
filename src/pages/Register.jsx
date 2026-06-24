import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
   const [errors, setErrors] = useState({});   
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();
     let newErrors = {};


        // Name Validation
  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (form.name.trim().length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  // Email Validation
  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    newErrors.email = "Please enter a valid email";
  }

    // Password Validation
  if (!form.password.trim()) {
    newErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    newErrors.password =
      "Password must be at least 6 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }
   
    try {
      const res = await axios.post(
        "https://food-1-vq0o.onrender.com/api/auth/register",
        form
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("User Registered Successfully");
      navigate("/menu");
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8">

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🍕</div>

          <h1 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join Foodie and start ordering delicious meals
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

  <input
    type="text"
    placeholder="Enter your name"
    value={form.name}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.name
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
    onChange={(e) => {
      setForm({
        ...form,
        name: e.target.value,
      });

      setErrors({
        ...errors,
        name: "",
      });
    }}
  />

          {errors.name && (
             <p className="text-red-500 text-sm mt-1">
               {errors.name}
                  </p>
                )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

  <input
    type="email"
    placeholder="Enter your email"
    value={form.email}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.email
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
    onChange={(e) => {
      setForm({
        ...form,
        email: e.target.value,
      });

      setErrors({
        ...errors,
        email: "",
      });
    }}
  />

             {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
             </p>
                )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

    <input
    type="password"
    placeholder="Create a password"
    value={form.password}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.password
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
    onChange={(e) => {
      setForm({
        ...form,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        password: "",
      });
    }}
  />

        {errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {errors.password}
          </p>
)}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}