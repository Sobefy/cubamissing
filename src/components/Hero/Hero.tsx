import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
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
    <Box textAlign="center" background="white" py={20} position="relative">
      <Image
        alt="Cuba"
        src="/hero-image.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container>
        <Box pt={40} pb={40}>
          <Image
            alt="Cuba"
            src="/logo-cuba-missing.png"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
