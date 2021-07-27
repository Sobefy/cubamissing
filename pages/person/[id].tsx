/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import Container from "../../src/components/Container/Container";
import Row from "../../src/components/DataDisplay/Row";
import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import usePerson from "../../src/hooks/usePerson";
import es from "../../src/locales/es";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import {
  googleSpreadsheetsAPIUrl,
  personsAPIUrl,
} from "../../src/consts/consts";
import { formatPersonsReponse } from "../../src/ultis/format";
import { person } from "../../src/types/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PersonPageProps {
  filteredPerson: person[];
  slug: string;
}

const PersonPage = ({ filteredPerson, slug }: PersonPageProps) => {
  const person =
    filteredPerson.length > 0
      ? filteredPerson[0]
      : {
          id: "",
          firstName: "",
          lastName: "",
          lastSeen: "",
          province: "",
          stopHour: "",
          stopDate: "",
          lastReport: "",
          verification: "",
          gender: "",
          birthDate: "",
          age: "",
          profession: "",
          skinTone: "",
          image: "",
        };

  const {
    firstName,
    lastName,
    image,
    stopDate,
    stopHour,
    skinTone,
    lastSeen,
    lastReport,
    province,
    age,
    gender,
    profession,
  } = person;

  const fullName = `${firstName} ${lastName}`;
  const imageURL = image || "/placeholder.jpg";
  const shareURL = `https://list.cubamissing.com/person/${slug}`;

  return (
    <Box minHeight="100vh">
      <Head>
        <title>{fullName} | Cubamissing.com</title>
        <meta
          name="description"
          content="Un grupo de voluntarios que trabajan para apoyar al pueblo de Cuba, incluyendo a líderes de Raíces deEsperanza y Cubalex, anuncian el lanzamiento dehttps://cubamissing.com. Desaparecidos Cubanos esuna plataforma para documentar los arrestos, desapariciones y violaciones de derechos por parte delrégimen cubano hacia los ciudadanos después de las protestas nacionales que comenzaron el 11 de Julio."
        />
        <meta
          property="og:title"
          content={`${fullName} | Cubamissing.com`}
          key="title"
        />
        <meta
          property="og:description"
          content="Un grupo de voluntarios que trabajan para apoyar al pueblo de Cuba, incluyendo a líderes de Raíces deEsperanza y Cubalex, anuncian el lanzamiento dehttps://cubamissing.com. Desaparecidos Cubanos esuna plataforma para documentar los arrestos, desapariciones y violaciones de derechos por parte delrégimen cubano hacia los ciudadanos después de las protestas nacionales que comenzaron el 11 de Julio."
          key="description"
        />
        <meta property="og:image" content={imageURL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={shareURL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box zIndex={1} position="relative">
        <Box zIndex={0}>
          <Image
            alt="Cuba"
            src="/hero-image.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py="16"
          >
            <Center mb={10}>
              <Text fontSize="3xl" wordBreak="break-word">
                {fullName}
              </Text>
            </Center>
            <Center mb={10}>
              <img src={imageURL} alt={fullName} />
            </Center>
            <Center mb={10}>
              <FacebookShareButton
                url={shareURL}
                style={{ marginRight: "20px" }}
              >
                <FacebookIcon borderRadius={8} />
              </FacebookShareButton>
              <TwitterShareButton url={shareURL}>
                <TwitterIcon borderRadius={8} />
              </TwitterShareButton>
            </Center>
            <Grid gridTemplateColumns="repeat(3, 1fr)" gridColumnGap={4}>
              <Box>
                <Row label="Edad" value={age} />
                <Row label="Provincia" value={province} />
                <Row label="Último reporte" value={lastReport} />
              </Box>
              <Box>
                <Row label="Hora de detención" value={stopHour} />
                <Row label="Fecha de detención" value={stopDate} />
                <Row label="Visto por última vez" value={lastSeen} />
              </Box>
              <Box>
                <Row label="Tono de piel" value={skinTone} />
                <Row label="Género" value={gender} />
                <Row label="Profesión" value={profession} />
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer translations={es.home.footer} />
    </Box>
  );
};

export default PersonPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const slug = typeof id === "string" ? id : "";
  const result = await fetch(`${googleSpreadsheetsAPIUrl}${personsAPIUrl}`);
  const formattedResult = await result.json();
  const formattedData = formatPersonsReponse(formattedResult);
  const filteredPerson =
    formattedData && slug
      ? formattedData.filter((person) => {
          return person.id === slug;
        })
      : [];

  return { props: { filteredPerson, slug } };
}
