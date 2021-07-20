import Head from "next/head";
import useSWR from "swr";

import CardsGrid from "../src/components/CardsGrid/CardsGrid";
import Hero from "../src/components/Hero/Hero";
import Search from "../src/components/Search/Search";
import Stats from "../src/components/Stats/Stats";
import { googleSpreadsheetsAPIUrl, personsAPIUrl } from "../src/consts/consts";
import mockedPersons from "../src/data/mockedPersons";
import es from "../src/locales/es";
import { formatPersonsReponse } from "../src/ultis/format";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    home: {
      head: { headTitle, headDescription },
      hero,
      stats,
      search,
      cards,
    },
  } = es;

  const { data, error } = useSWR(
    `${googleSpreadsheetsAPIUrl}${personsAPIUrl}`,
    fetcher
  );
  const formattedData = formatPersonsReponse(data);
  const isLoading = !error && !formattedData;

  console.log(formattedData);

  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero translations={hero} />
      <Stats translations={stats} />
      <Search translations={search} />
      <CardsGrid
        translations={cards}
        isLoading={isLoading}
        persons={formattedData}
      />
    </div>
  );
}
