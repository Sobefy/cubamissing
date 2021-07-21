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
        src="/hero-image.svg"
        layout="fill"
        objectFit="contain"
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
            size="md"
            _hover={{ background: "brand.darkBlue" }}
          >
            {reportButton}
          </Button>
        </Box>
        <Box pt={20} pb={28}>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
