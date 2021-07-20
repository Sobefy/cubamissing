import Head from "next/head";
import Hero from "../src/components/Hero/Hero";
import Stats from "../src/components/Stats/Stats";
import es from "../src/locales/es";

export default function Home() {
  const {
    home: {
      head: { headTitle, headDescription },
      hero,
      stats,
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
    </div>
  );
}
