// Remix tools
import { Form, Link } from "@remix-run/react";

// COntext API
// React hooks
import { useContext, useState } from "react";

/// Context API
import { ThemeContext } from "../context/ThemeContext";

export default function FilterByRegion() {
  const { theme } = useContext(ThemeContext);

  const [dropdown, setDropdown] = useState(false);

  return (
    <Form
      className={`inline-flex max-h-14 rounded shadow-sm ${
        theme === "light" ? " bg-white text-black" : "bg-darkBlue text-white"
      } sm:ml-auto `}>
      <label className=" rounded-l-md px-4 py-4 text-xs sm:text-sm">
        Filter by Region
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdown(!dropdown)}
          className={` inline-flex h-full items-center justify-center rounded-r-md px-2 ${
            theme === "light"
              ? " bg-white text-black"
              : "bg-darkBlue text-white"
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdown && (
          <div
            className={`absolute right-0 left-[-130px] z-10 mt-1 w-52 origin-top-right rounded-md bg-white shadow-lg ${
              theme === "light"
                ? " bg-white text-black"
                : "bg-darkBlue text-white"
            }`}
            role="button">
            <ul className="p-2">
              <li
                className={` block rounded-lg px-4 py-2 text-sm ${
                  theme === "light"
                    ? " text-black hover:bg-darkBlue hover:text-white"
                    : "hover:bg-white hover:text-black"
                }`}
                role="button"
                onClick={() => setDropdown(!dropdown)}>
                <Link to={"/region/americas"}>Americas</Link>
              </li>
              <li
                className={` block rounded-lg px-4 py-2 text-sm ${
                  theme === "light"
                    ? " text-black hover:bg-darkBlue hover:text-white"
                    : "hover:bg-white hover:text-black"
                }`}
                onClick={() => setDropdown(!dropdown)}>
                <Link to={"/region/asia"}>Asia</Link>
              </li>
              <li
                className={` block rounded-lg px-4 py-2 text-sm ${
                  theme === "light"
                    ? " text-black hover:bg-darkBlue hover:text-white"
                    : "hover:bg-white hover:text-black"
                }`}
                onClick={() => setDropdown(!dropdown)}>
                <Link to={"/region/europe"}>Europe</Link>
              </li>
              <li
                className={` block rounded-lg px-4 py-2 text-sm  ${
                  theme === "light"
                    ? " text-black hover:bg-darkBlue hover:text-white "
                    : " hover:bg-white hover:text-black"
                }`}
                role="button"
                onClick={() => setDropdown(!dropdown)}>
                <Link to={"/region/oceania"}>Oceania</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Form>
  );
}
