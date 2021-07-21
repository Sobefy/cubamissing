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
    <Box py={4} background="gray">
      <Container>
        <StatCard label={total} number={537} />
      </Container>
    </Box>
  );
};

export default Stats;
