// Remix tools
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

// Context API
import { ThemeContext } from "app/context/ThemeContext";
import { useContext } from "react";

export async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();

  const country = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.cca3}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  ).then((res) => res.json());

  const borders = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${country.borders}`
  )
    .then((res) => res.json())
    .catch(() => []);

  return {
    country,
    borders,
  };
}

export default function CountryDetails() {
  const { country, borders } = useLoaderData();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Link
        to="/"
        role={"button"}
        className={`${
          theme === "light" ? "text-darkBlue" : "text-white"
        } my-20 mr-auto ml-7 flex w-32 items-center  justify-center py-[10px] pl-8 pr-10 shadow-[0_0_7px_rgba(0,0,0,0.293139)] `}>
        <span>
          <svg
            className={`${theme === "light" ? "fill-darkBlue" : "fill-white"}
           mr-3 `}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
              />
            </g>
          </svg>
        </span>
        Back
      </Link>
      <section className=" mx-7 flex flex-wrap ">
        <img
          className=" w-560 mb-11 h-full object-cover"
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          width="560"
          height="401"
        />
        <article
          className={`${
            theme === "light" ? " text-darkBlue" : " text-white"
          } mx-auto sm:ml-[120px]`}>
          <h1 className=" mb-6 text-3xl font-bold">{country.name.common}</h1>
          <div className=" mb-16 flex flex-wrap">
            <div className=" mr-[122px]">
              <ul>
                <li>
                  <b>Native Name: </b>
                  {
                    Object.values(country.name.nativeName)[
                      Object.values(country.name.nativeName).length - 1
                    ].common
                  }
                </li>
                <li>
                  {" "}
                  <b>Population: </b> {country.population}
                </li>
                <li>
                  {" "}
                  <b>Region:</b> {country.region}
                </li>
                <li>
                  {" "}
                  <b>Sub Region: </b> {country.subregion}
                </li>
                <li>
                  {" "}
                  <b>Capital: </b> {country.capital}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <b>Top Level Domain: </b>
                  {country.tld[0]}
                </li>
                <li>
                  <b>Curriencies: </b>
                  {Object.values(country.currencies)[0].name}
                </li>
                <li>
                  <b>Languages: </b>
                  {Object.values(country.languages).join(", ")}
                </li>
              </ul>
            </div>
          </div>
          {country.borders.length > 0 && (
            <div className=" flex flex-wrap items-center gap-x-4">
              <b className=" mb-4">Borders Countries:</b>
              <ul className=" flex flex-wrap gap-2">
                {borders.map((border) => (
                  <li
                    key={border.cca3}
                    className="px-5 py-1 shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)]">
                    {border.name.common}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </section>
    </>
  );
}
