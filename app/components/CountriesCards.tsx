// Remix tools
import { Link } from "@remix-run/react";

// ContextAPI
import { ThemeContext } from "app/context/ThemeContext";
import { useContext } from "react";

export default function CountriesCards({
  name,
  flags,
  cca3,
  population,
  region,
  capital,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      key={cca3}
      className={`${
        theme === "light" ? " bg-white" : " bg-darkBlue"
      } rounded-md `}>
      <figure className=" h-40 max-w-full rounded-t-md">
        <img
          className=" shadow-slate-300 h-40 w-full rounded-t-md shadow-lg"
          src={flags.png}
          alt={`${name.common} flag`}
          width="264"
          height="160"
        />
      </figure>
      <div
        className={`${
          theme === "light" ? " text-darkBlue" : " text-white"
        } ml-6 mb-11 `}>
        <Link to={`/countrydetails/${cca3.toLowerCase()}`}>
          <p className="mt-6 mb-4 text-2xl font-bold ">{name.common}</p>
        </Link>

        <p className="py-1">
          {" "}
          <b>Population:</b> {population}
        </p>
        <p className="py-1">
          <b>Region: </b> {region}
        </p>
        <p className="py-1">
          <b>Capital: </b> {capital}
        </p>
      </div>
    </div>
  );
}
