// Remix tools
import type { LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";

// Components
import CountriesCards from "~/components/CountriesCards";
import FilterByRegion from "~/components/FilterByRegion";
import SearchBar from "~/components/SearchBar";

export const loader: LoaderFunction = async ({ params, request }) => {
  console.log(params.region);

  const countryByregion = await fetch(
    `https://restcountries.com/v3.1/region/${params.region}?fields=flags,name,population,region,capital,cca3`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return countryByregion;
};

export default function Region() {
  // Loading Data
  const countryByregion = useLoaderData();

  // Transition State
  const transition = useTransition();

  // Get letter search params
  const [searchParams] = useSearchParams();
  const searchLetter = searchParams.get("search");

  console.log(searchLetter);

  const countryFilter = countryByregion.filter(({ name }) => {
    if (name === "") {
      return countryByregion;
    } else if (
      name.common.toLowerCase().includes(searchLetter?.toLocaleLowerCase())
    ) {
      return countryByregion;
    }
  });

  console.log(countryFilter);

  return (
    <>
      <section className=" mx-4 flex flex-wrap py-12 sm:mx-20">
        <SearchBar />
        <FilterByRegion />
      </section>{" "}
      <section className="mx-14 mb-11 grid gap-[75px] sm:mx-20 sm:grid-cols-4  ">
        {transition.state === "submitting" || transition.state === "loading" ? (
          <p>Loading...</p>
        ) : searchLetter ? (
          countryFilter.length > 0 ? (
            countryFilter.map(
              ({ flags, name, population, region, capital, cca3 }) => (
                <CountriesCards
                  key={cca3}
                  name={name}
                  flags={flags}
                  cca3={cca3}
                  population={population}
                  region={region}
                  capital={capital}
                />
              )
            )
          ) : (
            <p>Not Found</p>
          )
        ) : (
          countryByregion.map(
            ({ flags, name, population, region, capital, cca3 }) => (
              <CountriesCards
                key={cca3}
                name={name}
                flags={flags}
                cca3={cca3}
                population={population}
                region={region}
                capital={capital}
              />
            )
          )
        )}
      </section>
    </>
  );
}
