import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-black w-full fixed bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-400 sm:text-center dark:text-gray-400">
          © 2023{"{"}" "{"}"}
          <a href="https://shiny-madeleine-291cc9.netlify.app/" className="hover:underline">
            Gerard Lucas
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/license" className="mr-4 hover:underline md:mr-6">
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
