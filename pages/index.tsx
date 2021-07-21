import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Head from "next/head";
import useSWR from "swr";

import CardsGrid from "../src/components/CardsGrid/CardsGrid";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import Stats from "../src/components/Stats/Stats";
import { googleSpreadsheetsAPIUrl, personsAPIUrl } from "../src/consts/consts";
import es from "../src/locales/es";
import { formatPersonsReponse, searchByProperty } from "../src/ultis/format";
import { person } from "../src/types/types";
import Filters from "../src/components/Filters/Filters";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    home: {
      head: { headTitle, headDescription },
      hero,
      stats,
      search,
      cards,
      footer,
    },
  } = es;

  const { data, error } = useSWR(
    `${googleSpreadsheetsAPIUrl}${personsAPIUrl}`,
    fetcher
  );
  const formattedData = formatPersonsReponse(data);
  const isLoading = !error && !formattedData;
  const [persons, setPersons] = useState<person[] | null>(null);

  useEffect(() => {
    if (formattedData && !persons) {
      setPersons(formattedData);
    }
  }, [formattedData, persons]);

  const queryParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const searchTerm = queryParams ? queryParams.get("search") ?? "" : "";
  const provinceTerm = queryParams ? queryParams.get("province") ?? "" : "";
  const initialTerm = queryParams ? queryParams.get("initial") ?? "" : "";
  const searchByNameResult = searchByProperty(searchTerm, persons, "search");
  const searchByProvinceResult = searchByProperty(
    provinceTerm,
    persons,
    "province"
  );
  const searchByInitialResult = searchByProperty(
    initialTerm,
    persons,
    "initial"
  );

  const results = searchByNameResult.concat(
    searchByProvinceResult,
    searchByInitialResult
  );

  const hasSearchTerms =
    searchTerm ||
    (provinceTerm && provinceTerm !== "all") ||
    (initialTerm && initialTerm !== "all")
      ? true
      : false;
  const hasFilteredResults =
    hasSearchTerms && results.length > 0 ? true : false;
  const hasEmptyResults = hasSearchTerms && results.length === 0 ? true : false;

  return (
    <Box backgroundColor="brand.bgWhite">
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero translations={hero} />
      <Stats translations={stats} />
      <Filters
        translations={search}
        queryParams={queryParams}
        searchTerm={searchTerm}
        provinceTerm={provinceTerm}
        initialTerm={initialTerm}
        persons={persons}
      />
      <CardsGrid
        translations={cards}
        isLoading={isLoading}
        persons={hasFilteredResults ? results : persons}
        isEmpty={hasEmptyResults}
        searchTerm={searchTerm}
      />
      <Footer translations={footer} />
    </Box>
  );
}
