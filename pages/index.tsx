import Head from "next/head";
import Hero from "../src/components/Hero/Hero";
import Search from "../src/components/Search/Search";
import Stats from "../src/components/Stats/Stats";
import es from "../src/locales/es";

export default function Home() {
  const {
    home: {
      head: { headTitle, headDescription },
      hero,
      stats,
      search,
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
    </div>
  );
}
