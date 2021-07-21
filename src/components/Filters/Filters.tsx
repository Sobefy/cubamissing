import { useRouter } from "next/router";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import Container from "../Container/Container";
import Search from "../Search/Search";
import SelectFilter from "./SelectFilter/SelectFilter";
import { getAlphabet } from "../../ultis/format";

interface FilterProps {
  translations: {
    searchTitle: string;
    searchIndication: string;
    searchPlaceholder: string;
  };
  searchTerm: string;
  queryParams: URLSearchParams | null;
}

export const Filters = ({
  translations,
  searchTerm,
  queryParams,
}: FilterProps) => {
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

  const handleSelectFilter = () => {};
  const alphabetArray = getAlphabet();

  return (
    <Box py={8}>
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
        </Flex>
        <Box>
          <Grid width="full" templateColumns="50% 25% 25%" columnGap={8}>
            <Search
              handleSearch={handleSearch}
              searchTerm={searchTerm}
              placeholder={searchPlaceholder}
            />
            <SelectFilter label="Provincia" options={alphabetArray} />
            <SelectFilter label="Primera inicial" options={alphabetArray} />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Filters;
