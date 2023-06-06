import { NavLink } from "react-router-dom";

const Mustlogin = () => {
  return (
    <div className="flex flex-col items-center mt-16 space-y-6" >
      <h2>You must login first to see more details.</h2>
      <NavLink to="/">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Go back to home page
        </button>
      </NavLink>
    </div>
  );
};

export default Mustlogin;
