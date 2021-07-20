import { Box, Grid } from "@chakra-ui/react";

import { cardTranslations, person } from "../../types/types";
import Card from "../Card/Card";
import Container from "../Container/Container";

interface CardsGridProps {
  translations: cardTranslations;
  persons: person[] | null;
  isLoading: boolean;
}

const CardsGrid = ({ translations, persons, isLoading }: CardsGridProps) => {
  return (
    <main>
      <Box backgroundColor="brand.oceanBlue" py={8}>
        <Container>
          <Grid templateColumns="1fr 1fr" columnGap={10} rowGap={10}>
            {!isLoading && persons ? (
              <>
                {persons.map((person) => (
                  <Card
                    key={person.id}
                    person={person}
                    translations={translations}
                  />
                ))}
              </>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </main>
  );
};
export default CardsGrid;
