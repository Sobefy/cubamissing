import { useRouter } from "next/router";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import Container from "../Container/Container";
import Search from "../Search/Search";
import SelectFilter from "./SelectFilter/SelectFilter";
import { getAlphabet, getUniqueProvinces } from "../../ultis/format";
import { person } from "../../types/types";

interface FilterProps {
  translations: {
    searchTitle: string;
    searchIndication: string;
    searchPlaceholder: string;
    provinceFilter: string;
    firstLetterFilter: string;
    searchFilter: string;
  };
  searchTerm: string;
  provinceTerm: string;
  initialTerm: string;
  queryParams: URLSearchParams | null;
  persons: person[] | null;
}

export const Filters = ({
  translations,
  searchTerm,
  provinceTerm,
  initialTerm,
  queryParams,
  persons,
}: FilterProps) => {
  const {
    searchTitle,
    searchIndication,
    searchPlaceholder,
    provinceFilter,
    firstLetterFilter,
    searchFilter,
  } = translations;
  const router = useRouter();

  const alphabetArray = getAlphabet();
  const provincesArray = persons ? getUniqueProvinces(persons) : [];
  const paramsObject: {
    [key: string]: string | null;
  } = {};

  if (queryParams) {
    for (var value of queryParams.keys()) {
      paramsObject[value] = queryParams.get(value);
    }
  }

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

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (queryParams) {
      const newSearchTerm = e.target.value;
      router.replace(
        {
          query: {
            province: newSearchTerm.trim(),
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

  const handleChangeAlphabet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (queryParams) {
      const newSearchTerm = e.target.value;
      router.replace(
        {
          query: {
            initial: newSearchTerm.trim(),
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
          maxW="xl"
          mx="auto"
        >
          <Heading
            fontSize={{ base: "2xl", md: "2xl" }}
            fontWeight="bold"
            lineHeight="inherit"
            mb={4}
          >
            {searchTitle}
          </Heading>
          <Text as="h2" color="brand.greyBlue" mb={4}>
            {searchIndication}
          </Text>
        </Flex>
        <Box px={5} py={5}>
          <Grid
            width="full"
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
            columnGap={8}
            rowGap={{ base: 4, md: 0 }}
          >
            <Search
              handleSearch={handleSearch}
              value={searchTerm}
              placeholder={searchPlaceholder}
              searchFilter={searchFilter}
            />
            <SelectFilter
              label={provinceFilter}
              options={provincesArray}
              onChange={handleChangeFilter}
              value={provinceTerm}
            />
            <SelectFilter
              label={firstLetterFilter}
              options={alphabetArray}
              onChange={handleChangeAlphabet}
              value={initialTerm}
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Filters;
