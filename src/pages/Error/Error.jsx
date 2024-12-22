
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Sorry, the page you are looking for doesn't exist or has been removed.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 btn btn-error text-white font-medium rounded-lg  transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default Error;
