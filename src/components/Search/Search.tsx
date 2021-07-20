import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { UsersIcon } from "@heroicons/react/solid";

import Container from "../Container/Container";

interface SearchProps {
  translations: {
    searchTitle: string;
    searchIndication: string;
    searchPlaceholder: string;
    searchButton: string;
  };
}

const Search = ({ translations }: SearchProps) => {
  const { searchTitle, searchIndication, searchPlaceholder, searchButton } =
    translations;

  return (
    <Box backgroundColor="brand.oceanBlue" py={8}>
      <Container>
        <Flex
          color="white"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          flexDirection="column"
          maxW="lg"
          mx="auto"
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="inherit"
            mb={4}
          >
            {searchTitle}
          </Heading>
          <Text as="h2" color="brand.blueGrey" mb={4}>
            {searchIndication}
          </Text>
          <Flex width="full">
            <InputGroup mr={2}>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={
                  <UsersIcon
                    width={18}
                    color="var(--chakra-colors-brand-greyBlue)"
                  />
                }
              />
              <Input
                placeholder={searchPlaceholder}
                backgroundColor="white"
                color="brand.blueGrey"
              />
            </InputGroup>
            <Button
              fontSize="xs"
              fontWeight="semibold"
              background="brand.blue"
              rounded="md"
              color="white"
              size="md"
              _hover={{ background: "brand.darkBlue" }}
            >
              {searchButton}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Search;
