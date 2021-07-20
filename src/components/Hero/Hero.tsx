import Image from "next/image";
import { Box, Button, Heading } from "@chakra-ui/react";
import Container from "../Container/Container";

interface HeroProps {
  translations: {
    title: string;
    reportButton: string;
  };
}

const Hero = ({ translations }: HeroProps) => {
  const { title, reportButton } = translations;
  return (
    <Box textAlign="center" background="grey" py={6}>
      <Image
        alt="Cuba"
        src="/hero.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container>
        <Box display="flex" justifyContent="flex-end" width="full">
          <Button
            fontSize="xs"
            fontWeight="semibold"
            background="brand.blue"
            rounded="md"
            color="white"
            _hover={{ background: "brand.darkBlue" }}
          >
            {reportButton}
          </Button>
        </Box>
        <Box maxW="lg" mx="auto" py={"28"}>
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            fontStyle="heading"
          >
            {title}
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
