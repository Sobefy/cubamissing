import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface StatCardProps {
  label: string;
  number: number;
}

const StatCard = ({ label, number }: StatCardProps) => {
  return (
    <Stat
      bgColor="brand.bgWhite"
      color="brand.oceanBlue"
      p={6}
      borderRadius={8}
      textAlign={{ base: "center", md: "center" }}
    >
      <StatLabel fontSize="md" fontWeight="normal">
        {label}
      </StatLabel>
      <StatNumber fontSize="4xl" fontWeight="bold">
        {number}
      </StatNumber>
    </Stat>
  );
};

export default StatCard;
