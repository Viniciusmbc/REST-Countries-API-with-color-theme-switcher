// Remix Tools
import { useLoaderData, useTransition } from "@remix-run/react";

// Components
import CountriesCards from "app/components/CountriesCards";
import SearchBar from "app/components/SearchBar";
import FilterByRegion from "app/components/FilterByRegion";

// Remix tools
import { json } from "@remix-run/node";

type ShowResult = {
  name: string;
  flags: string;
  cca3: string;
  population: number;
  region: string;
  capital: string;
};

type LoaderData = {
  status: "resultsFound" | "noResults" | "all";
  searchTerm: string;
  items: Array<{
    name: string;
    flags: string;
    cca3: string;
    population: number;
    region: string;
    capital: string;
  }>;
};

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");

  if (!searchTerm || "") {
    const allCountries = await fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
    )
      .then((res) => res.json())
      .catch((err) => err);

    const countries: LoaderData = {
      status: "all",
      searchTerm: searchTerm || "",
      items: allCountries.splice(0, 8),
    };

    return countries;
  }

  const result = await fetch(
    `https://restcountries.com/v3.1/name/${searchTerm}?fields=flags,name,population,region,capital,cca3`
  );

  const showResults = (await result.json()) as undefined | Array<ShowResult>;

  if (!showResults || !showResults.length) {
    const countries = {
      status: "noResults",
      searchTerm,
      items: [],
    };
    return json(countries);
  }

  const countries = {
    status: "resultsFound",
    searchTerm,
    items: showResults,
  };

  return countries;
}

export default function Index() {
  // Data from loader
  const countries = useLoaderData();

  // transition state
  const transition = useTransition();

  return (
    <>
      <section className=" mx-4 my-12 flex flex-wrap sm:mx-20 ">
        <SearchBar />
        <FilterByRegion />
      </section>

      {transition?.state === "submitting" || transition.state === "loading" ? (
        <p> Loading...</p>
      ) : (
        <section className="mx-14 mb-11 grid gap-[75px] sm:mx-20 sm:grid-cols-4 ">
          {countries.status === "all"
            ? countries.items.map(
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
            : null}
          {countries.status === "resultsFound"
            ? countries.items.map(
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
            : null}
          {countries.status === "noResults" ? (
            <p>No results found for you search</p>
          ) : null}
        </section>
      )}
    </>
  );
}
