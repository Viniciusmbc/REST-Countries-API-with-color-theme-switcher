// Context API
import { ThemeContext } from "app/context/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`${
        theme === "light"
          ? " bg-white text-darkBlue"
          : " bg-darkBlue text-white"
      }   max-w-screen-desktop  shadow-[0_2px_4px_rgba(0,0,0,0.0562443)]`}>
      <nav className={`mx-4 sm:mx-20`}>
        <div className=" flex items-center justify-between py-6 ">
          <p className="font-bold sm:text-2xl">Where in the world?</p>
          {theme === "light" ? (
            <button
              onClick={toggleTheme}
              className=" flex items-center text-xs font-semibold  text-black">
              <span className=" mr-2 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z"
                    fill="black"
                    stroke="#111517"
                    strokeWidth="1.25"
                  />
                </svg>
              </span>
              Dark Mode
            </button>
          ) : (
            <button
              onClick={toggleTheme}
              className=" flex items-center text-xs font-semibold  text-white">
              <span className=" mr-2 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.25"
                  />
                </svg>
              </span>
              Light Mode
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
