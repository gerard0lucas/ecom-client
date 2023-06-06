import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/userAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dat = { email, password };
    try {
      const res = await axios.post(`https://ecomserver-pcxl.onrender.com/api/user/login`, dat);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('Ecom_user',JSON.stringify(res.data))
        toast.success(`${res.data.user.email} Login succesfull`);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col space-y-6 items-center py-6 ">
      <h1 className="text-3xl">Login Here</h1>
      <form onSubmit={handleSubmit} className="w-full  max-w-xs">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            {/* ..........................Email........................................ */}
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 "></div>
        <div className="flex mt-4 flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            {/* ..........................password........................................ */}
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******************"
              required
            />
          </div>
        </div>
        <button
          className="bg-gray-300 mt-6 text-center w-full hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
