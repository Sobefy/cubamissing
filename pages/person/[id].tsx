/* eslint-disable @next/next/no-img-element */
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

const PersonPage = () => {
  const router = useRouter();
  const slug = typeof router.query.id === "string" ? router.query.id : "";

  const { filteredPerson } = usePerson(slug);
  const isLoading = !filteredPerson;
  const person =
    !isLoading && filteredPerson.length > 0
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
  const shareURL = `https://list.cubamissing.com/people/${slug}`;

  return (
    <Box minHeight="100vh">
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