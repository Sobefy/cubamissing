import { Box, Grid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
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
    <Box backgroundColor="brand.oceanBlue" py={8}>
      <Container>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
          columnGap={{ base: 0, md: 6 }}
          rowGap={{ base: 6, md: 0 }}
        >
          <StatCard label={dissapeared} number={500} />
          <StatCard label={released} number={20} />
          <StatCard label={detention} number={200} />
          <StatCard label={toVerify} number={200} />
          <StatCard label={total} number={200} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
