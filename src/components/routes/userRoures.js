import { useState, useEffect } from "react";
import { useAuth } from "../../context/userAuth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Mustlogin from "../../pages/mustLogin";


export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`https://ecomserver-pcxl.onrender.com/api/user/user-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Mustlogin />;
}