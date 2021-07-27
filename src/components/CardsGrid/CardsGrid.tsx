import { useRouter } from "next/router";
import { Box, Grid, Text } from "@chakra-ui/react";

import Container from "../Container/Container";
import { cardTranslations, person } from "../../types/types";
import Card from "../Card/Card";
import CardSkeleton from "../Skeleton/CardSkeleton";
import { skeletonCardLength } from "../../consts/consts";

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

  const handleCardClick = (id: string) => {
    // if (typeof window !== "undefined")
    //   window.open(`https://list.cubamissing.com/person/${id}`, "_ blank");
    router.push(`/person/${id}`);
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
