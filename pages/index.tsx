import { Box } from "@chakra-ui/react";
import Head from "next/head";

import CardsGrid from "../src/components/CardsGrid/CardsGrid";
import Footer from "../src/components/Footer/Footer";
import Stats from "../src/components/Stats/Stats";
import es from "../src/locales/es";
import { searchByProperty } from "../src/ultis/format";
import Filters from "../src/components/Filters/Filters";
import usePerson from "../src/hooks/usePerson";

export default function Home() {
  const {
    home: { stats, search, cards, footer },
  } = es;

  const { persons, isLoading } = usePerson();

  const queryParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const searchTerm = queryParams ? queryParams.get("search") ?? "" : "";
  const provinceTerm = queryParams ? queryParams.get("province") ?? "" : "";
  const initialTerm = queryParams ? queryParams.get("initial") ?? "" : "";
  const lastReportTerm = queryParams
    ? queryParams.get("last_report") ?? ""
    : "";
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
  const searchByLastReportResult = searchByProperty(
    lastReportTerm,
    persons,
    "last_report"
  );

  const results = searchByNameResult.concat(
    searchByProvinceResult,
    searchByInitialResult,
    searchByLastReportResult
  );

  const hasSearchTerms =
    searchTerm ||
    (provinceTerm && provinceTerm !== "all") ||
    (initialTerm && initialTerm !== "all") ||
    (lastReportTerm && lastReportTerm !== "all")
      ? true
      : false;
  const hasFilteredResults =
    hasSearchTerms && results.length > 0 ? true : false;
  const hasEmptyResults = hasSearchTerms && results.length === 0 ? true : false;

  return (
    <Box backgroundColor="brand.bgWhite">
      <Head>
        <meta
          name="google-site-verification"
          content="bjphs7ZFE5nbRSDgf0_800tenyHLn4fxZdl0YNUbsCY"
        />
        <title>
          Cubamissing.com | Ayudanos a encontrar a nuestros hermanos
        </title>
        <meta
          name="description"
          content="Un grupo de voluntarios que trabajan para apoyar al pueblo de Cuba, incluyendo a líderes de Raíces deEsperanza y Cubalex, anuncian el lanzamiento de https://cubamissing.com. Desaparecidos Cubanos esuna plataforma para documentar los arrestos, desapariciones y violaciones de derechos por parte delrégimen cubano hacia los ciudadanos después de las protestas nacionales que comenzaron el 11 de Julio."
        />
        <meta
          property="og:title"
          content="Cubamissing.com | Ayúdanos a encontrar a nuestros hermanos"
          key="title"
        />
        <meta
          property="og:description"
          content="Un grupo de voluntarios que trabajan para apoyar al pueblo de Cuba, incluyendo a líderes de Raíces de Esperanza y Cubalex, anuncian el lanzamiento de https://cubamissing.com. Desaparecidos Cubanos esuna plataforma para documentar los arrestos, desapariciones y violaciones de derechos por parte delrégimen cubano hacia los ciudadanos después de las protestas nacionales que comenzaron el 11 de Julio."
          key="description"
        />
        <meta property="og:image" content="/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.cubamissing.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stats translations={stats} />
      <Filters
        translations={search}
        queryParams={queryParams}
        searchTerm={searchTerm}
        provinceTerm={provinceTerm}
        initialTerm={initialTerm}
        lastReportTerm={lastReportTerm}
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
