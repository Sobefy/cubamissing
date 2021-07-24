import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Container from "../Container/Container";
import {Link} from "react-router-dom";

interface FooterProps {
  translations: {
    email: string;
    contactUsButton: string;
  };
}

const Footer = ({ translations }: FooterProps) => {
  const { email, contactUsButton } = translations;
  return (
    <Box
      backgroundColor="brand.oceanBlue"
      py={10}
      borderTop={1}
      borderColor="white"
      borderStyle="solid"
    >
      <Container>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text
            as="span"
            color="brand.blueGrey"
            mb={{ base: 4, md: 0 }}
            mr={{ base: 0, md: 8 }}
          >
            {email}
          </Text>
          <Link to="/contact#contact">
          <Button
            fontSize="xs"
            fontWeight="semibold"
            background="brand.blue"
            rounded="md"
            color="white"
            size="md"
            _hover={{ background: "brand.darkBlue" }}
          >
            {contactUsButton}
          </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
