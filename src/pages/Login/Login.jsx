import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { logininWithEmeilPasseord,loginGoogle } = useContext(AuthContext);
  console.log(loginGoogle)

  const [error, setError] = useState(""); // State for error message
  

  const handleGoogle = () => {
    loginGoogle()
    .then(result => {
      console.log(result.user)
      toast.success("Google Login Successful", {
        position: "top-right",
        autoClose: 1000,
      });
      navigate("/");

    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email and Password Validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    logininWithEmeilPasseord(email, password)
      .then((result) => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 1000,
        });
        navigate("/");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError("Invalid email or password."); // Show error if login fails
        console.log(error.message);
      });
  };


  return (
   <div className="dark:bg-slate-700 bg-gray-100">
     <div className="flex justify-center items-center  pb-28 pt-48  max-w-7xl mx-auto">
      <div className="w-full max-w-md bg-gray-200 dark:bg-slate-400 ring-2 shadow-lg dark:shadow-gray-600 rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 ">Login</h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forget Password Link */}
          <div className="text-right">
            <a className="text-sm text-blue-700 hover:underline">Forget Password?</a>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md  transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login Button */}
        <div className="flex justify-center">
          <button onClick={handleGoogle} className="bg-slate-300  rounded py-2 w-full flex justify-center items-center gap-2">
            <FcGoogle className="text-lg" />
            <p className="text-gray-700">Google</p>
          </button>
        </div>

        {/* Register Link */}
        <p className="text-sm text-gray-600 dark:text-white/70 text-center mt-4">
          Don’t have an account?
          <Link to="/register" className="text-blue-700 ml-2 hover:underline">
            register
          </Link>
        </p>
      </div>
    </div>
   </div>
  );
}

export default Login;
