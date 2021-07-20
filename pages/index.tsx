import Head from "next/head";
import CardsGrid from "../src/components/CardsGrid/CardsGrid";
import Hero from "../src/components/Hero/Hero";
import Search from "../src/components/Search/Search";
import Stats from "../src/components/Stats/Stats";
import mockedPersons from "../src/data/mockedPersons";
import es from "../src/locales/es";

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
      <CardsGrid translations={cards} persons={mockedPersons} />
    </div>
  );
}
