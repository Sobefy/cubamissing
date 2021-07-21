import { Box, Grid } from "@chakra-ui/react";
import useSWR from "swr";
import {
  googleSpreadsheetsAPIUrl,
  personsAPIUrlPage2,
} from "../../consts/consts";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Stats = ({ translations }: StatsProps) => {
  const { dissapeared, released, toVerify, detention, total } = translations;
  const { data, error } = useSWR(
    `${googleSpreadsheetsAPIUrl}${personsAPIUrlPage2}`,
    fetcher
  );

  return (
    <Box py={8} backgroundColor="#2350b2">
      <Container>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
          columnGap={{ base: 0, md: 6 }}
          rowGap={{ base: 6, md: 0 }}
          textAlign="center"
        >
          <StatCard label={dissapeared} number={40} />
          <StatCard label={released} number={87} />
          <StatCard label={detention} number={118} />
          <StatCard label={toVerify} number={292} />
          <StatCard label={total} number={537} />

        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
