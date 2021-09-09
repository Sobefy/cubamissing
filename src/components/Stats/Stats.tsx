import { Box, Grid } from "@chakra-ui/react";
import Container from "../Container/Container";
import StatCard from "../StatCard/StatCard";

interface StatsProps {
  translations: {
    dissapeared: string;
    released: string;
    toVerify: string;
    detention: string;
    total: string;
  };
}

const Stats = ({ translations }: StatsProps) => {
  const { dissapeared, released, toVerify, detention, total } = translations;

  return (
    <Box py={8} backgroundColor="#2350b2">
      <Container>
        <Grid
          templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(5, 1fr)" }}
          columnGap={{ base: 4, md: 6 }}
          rowGap={{ base: 6, md: 0 }}
          textAlign="center"
        >
          { /* <StatCard label={dissapeared} number={0} gridColumn="1/3" /> */}
          <StatCard label={released} number={411} gridColumn="3/5" />
          <StatCard label={detention} number={443} gridColumn="1/3" />
          <StatCard label={toVerify} number={102} gridColumn="3/5" />
          <StatCard label={total} number={956} gridColumn="1/5" />
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
