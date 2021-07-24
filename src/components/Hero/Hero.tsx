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
  const myLoader = (params:any) => {
    return `https://cubamissing.com/_next/image?url=%2Fhero-image.svg&w=3840&q=100`
  }
  return (
    <Box style={{backgroundImage:"url('https://cubamissing-media.s3.amazonaws.com/hero-image.jpeg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} textAlign="center" background="white" py={20} position="relative">
      
      <Container>
        <Box pt={40} pb={40} style={{backgroundImage:"url('https://cubamissing-media.s3.amazonaws.com/hero-image.svg')",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
