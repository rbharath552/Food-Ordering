import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {

   const navigate = useNavigate();
  const [errors, setErrors] = useState({});
   const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin= async (e)=>{
     
     e.preventDefault();

    let newErrors = {};

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

      // LOGIN API
      const res = await axios.post(
        "https://food-1-vq0o.onrender.com/api/auth/login",
        form
      );

      console.log(res.data);

      // STORE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/menu");

    }

    catch (error) {

      console.log(error);

      alert("Invalid Email or Password");
    }

  
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🍔</div>

          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue ordering your favorite food
          </p>
        </div>

        {/* Form */}
        <form onSubmit= {handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

             <input
    type="email"
    placeholder="Enter your email"
    value={form.email}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.email
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
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
    placeholder="Enter your password"
    value={form.password}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.password
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
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

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-orange-500 hover:text-orange-600"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}