import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email || !email.includes("@"))
      newErrors.email = "Please enter a valid email";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        alert("Login successful! Redirecting to home...");
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-50 font-main text-text-dark flex items-center justify-center min-h-screen p-4">
     

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100 animate-fade-in-up">
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-block mb-4 text-3xl font-bold text-primary hover:scale-105 transition-transform"
            >
              <i className="fas fa-shopping-bag mr-2"></i>pasa
            </Link>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500">Please login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="far fa-envelope text-gray-400"></i>
                </div>
                <input
                  type="email"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary/50 focus:border-primary"}`}
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  type="password"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary/50 focus:border-primary"}`}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary rounded border-gray-300 focus:ring-primary"
                  id="rememberMe"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-primary hover:underline fw-bold"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-primary/40 active:scale-95 ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="text-center text-gray-500 mt-6">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-bold hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            &copy; 2026 pasa-ecommerce. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
