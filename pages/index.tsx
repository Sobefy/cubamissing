import Head from "next/head";
import Hero from "../src/components/Hero/Hero";
import es from "../src/locales/es";

export default function Home() {
  const {
    home: {
      head: { headTitle, headDescription },
      hero,
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
    </div>
  );
}
