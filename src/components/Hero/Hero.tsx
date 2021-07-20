import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Container from "../Container/Container";

interface HeroProps {
  translations: {
    title: string;
    subTitle: string;
    reportButton: string;
  };
}

const Hero = ({ translations }: HeroProps) => {
  const { title, subTitle, reportButton } = translations;
  return (
    <Box textAlign="center" background="grey" py={6} position="relative">
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
            size="md"
            _hover={{ background: "brand.darkBlue" }}
          >
            {reportButton}
          </Button>
        </Box>
        <Box maxW="lg" mx="auto" pt={20} pb={28}>
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="inherit"
            mb={4}
          >
            {title}
          </Heading>
          <Text as="h2" color="brand.blueGrey">
            {subTitle}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
