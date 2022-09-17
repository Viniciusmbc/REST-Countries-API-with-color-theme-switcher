// Context API
import {
  Form,
  useSearchParams,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import { ThemeContext } from "app/context/ThemeContext";
import { useContext } from "react";

export default function SearchBar() {
  // theme context
  const { theme } = useContext(ThemeContext);

  const submit = useSubmit();

  return (
    <Form
      method="get"
      className={` rounded ${
        theme === "light" ? " bg-white" : "bg-darkBlue"
      } mb-10 `}
      onChange={(e) => submit(e.currentTarget)}>
      <label
        className={`${
          theme === "light" ? " bg-white " : "bg-darkBlue"
        } flex items-center rounded shadow-sm`}
        htmlFor="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ml-8 mr-6 max-h-[18px] w-6${
            theme === "light" ? " stroke-darkBlue" : " stroke-white"
          }`}
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          className={` rounded py-4 placeholder:text-xs sm:placeholder:text-sm  ${
            theme === "light"
              ? " bg-white text-black placeholder:text-black"
              : " bg-darkBlue text-white placeholder:text-white"
          }`}
        />
      </label>
    </Form>
  );
}
