import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser ,updateProfileUser,loginGoogle} = useContext(AuthContext);


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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    const formData = {
      name,
      email,
      photoURL,
      password,
    };
    console.log(formData);

    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 1000,
        });
        navigate("/");
        updateProfileUser({
         displayName:name,
         photoURL:photoURL
        })
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen max-w-7xl mx-auto">
      <div className="w-full max-w-md bg-white shadow-lg shadow-slate-400 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register
        </h1>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your photo URL"
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
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
              required
            />
            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mt-2">
                {error}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0075FF] text-white rounded-lg shadow-md hover:bg-[#01499b] transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center">
          <button onClick={handleGoogle} className="bg-gray-200 rounded py-2 w-full flex justify-center items-center gap-2">
            <FcGoogle className="text-lg" />
            <p className="text-gray-700">Google</p>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to={"/login"}>
            <a className="text-[#0075FF] hover:underline">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
