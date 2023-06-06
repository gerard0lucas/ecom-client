import { useState, useEffect } from "react";
import { useAuth } from "../../context/userAuth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Mustlogin from "../../pages/mustLogin";


export default function AdminRoute() {
  const [ok, setOk] = useState(null);
  const [auth, setAuth] = useAuth();

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`https://ecomserver-pcxl.onrender.com/api/user/admin-auth`);
      console.log(res.response);
      if (res.data.ok) {
        setOk(true);
      }
      else{
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Mustlogin />;
}