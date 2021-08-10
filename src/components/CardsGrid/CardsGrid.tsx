import { useRouter } from "next/router";
import { Box, Grid, Text, Center } from "@chakra-ui/react";

import Container from "../Container/Container";
import { cardTranslations, person } from "../../types/types";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import CardSkeleton from "../Skeleton/CardSkeleton";
import { skeletonCardLength } from "../../consts/consts";
import { slugify } from "../../ultis/format";
import { auto } from "@popperjs/core";

interface CardsGridProps {
  translations: cardTranslations;
  persons: person[] | null;
  isLoading: boolean;
  isEmpty: boolean;
  searchTerm: string;
}

const CardsGrid = ({
  translations,
  persons,
  isLoading,
  isEmpty,
  searchTerm,
}: CardsGridProps) => {
  const router = useRouter();

  const handleCardClick = (id: string, fullName: string) => {
    if (typeof window !== "undefined") {
      const formattedName = slugify(fullName);
      const url = `https://list.cubamissing.com/person/${formattedName}-${id}`;
      window.open(url, "_ blank");
    }
  };

  return (
    <main
      style={{
        backgroundImage: "url(/background-image.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>

        <Center><Modal /></Center>


        <Box py={8} pb={14}>
          {isEmpty ? (
            <Text color="#2d2d2d">
              Sorry, there were no results for:
              <Text as="span" fontWeight="bold" ml={2}>
                {searchTerm}
              </Text>
            </Text>
          ) : (
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              columnGap={10}
              rowGap={10}
            >
              {!isLoading && persons ? (
                <>
                  {persons.map((person) => (
                    <Card
                      key={person.id}
                      person={person}
                      translations={translations}
                      onClick={handleCardClick}
                    />
                  ))}
                </>
              ) : (
                [...Array(skeletonCardLength)].map((_, i) => (
                  <CardSkeleton key={i} />
                ))
              )}
            </Grid>
          )}
        </Box>
      </Container>
    </main>
  );
};
export default CardsGrid;
