import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useAuth } from "../context/userAuth";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {HiUserCircle} from "react-icons/hi"


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const HandleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("Ecom_user");
    toast.success("Logout succesfull");
  };
  return (
    <nav className="py-3 px-28 bg-gray-300 flex items-center justify-between">
      <div className="left flex space-x-8">
        <div className="image">
          <img width={35} src="/images/Sharingan.png" alt="" />
        </div>
      </div>
      <div className="right flex items-center space-x-8">
        <input
          className="border-2 w-64 border-sky-500 px-4 py-1 "
          placeholder="Search"
          type="text"
        />
        <div className="lists text-lg flex items-center space-x-4">
          <div className="hover:bg-gray-50 px-2 py-1 ">
            <NavLink to="/">HOME</NavLink>
          </div>
          {!auth.user ? (
            <>
              <div>
                <NavLink to="/register">Register</NavLink>
              </div>
              <div>
                <NavLink to="/login">Login</NavLink>
              </div>
            </>
          ) : (
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex w-full uppercase items-center justify-center gap-x-1 rounded-md  px-2 py-1 text-lg  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    
                    <div className="text-2xl">
                    <HiUserCircle />
                    </div>
                    {auth.user.name}
                    
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to={`/dashboard/${auth.user.role == true ? "admin" : "user" }`}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Dashboard
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="/"
                              onClick={HandleLogout}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Logout
                            </NavLink>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}

          {/* <div>
            <NavLink to="/policy">POLICY</NavLink>
          </div> */}
        </div>
        <div className="cart flex flex-col items-center">
          <span className="text-lg">(10)</span>
          <BsCart3 className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
