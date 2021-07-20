import { Box, Grid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import Container from "../Container/Container";
import StatCard from "../StatCard/StatCard";

interface StatsProps {
  translations: {
    dissapeared: string;
    released: string;
    toVerify: string;
  };
}

const Stats = ({ translations }: StatsProps) => {
  const { dissapeared, released, toVerify } = translations;

  return (
    <Box backgroundColor="brand.oceanBlue" py={8}>
      <Container>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          columnGap={{ base: 0, md: 6 }}
          rowGap={{ base: 6, md: 0 }}
        >
          <StatCard label={dissapeared} number={500} />
          <StatCard label={released} number={20} />
          <StatCard label={toVerify} number={200} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
