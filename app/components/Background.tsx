// Context API
import { ThemeContext } from "app/context/ThemeContext";
import { useContext } from "react";

const Background = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <body
      className={`${
        theme === "light" ? " bg-white" : " bg-veryDarkBlue"
      }  mx-auto min-h-screen max-w-screen-desktop `}>
      {children}
    </body>
  );
};

export default Background;
