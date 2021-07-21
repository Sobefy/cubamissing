import { useRouter } from "next/router";
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

import { person } from "../../types/types";
import Container from "../Container/Container";
import React, { useState } from "react";

interface SearchProps {
  translations: {
    searchTitle: string;
    searchIndication: string;
    searchPlaceholder: string;
  };
  searchTerm: string;
  queryParams: URLSearchParams | null;
}

const Search = ({ translations, queryParams, searchTerm }: SearchProps) => {
  const { searchTitle, searchIndication, searchPlaceholder } = translations;
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (queryParams) {
      const newSearchTerm = e.target.value;
      router.replace(
        {
          query: {
            search: newSearchTerm.trim(),
          },
        },
        undefined,
        {
          scroll: false,
          shallow: true,
        }
      );
    }
  };

  return (
    <Box py={8}>
      <Container>
        <Flex
          color="#2d2d2d"
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
          <Text as="h2" color="brand.greyBlue" mb={4}>
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
                value={searchTerm}
                onChange={handleSearch}
              />
            </InputGroup>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Search;
