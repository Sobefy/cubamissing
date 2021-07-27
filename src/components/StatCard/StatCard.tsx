import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface StatCardProps {
  label: string;
  number: number;
  gridColumn: string;
}

const StatCard = ({ label, number, gridColumn }: StatCardProps) => {
  return (
    <Stat
      bgColor="brand.bgWhite"
      color="brand.oceanBlue"
      p={{ base: 4, md: 6 }}
      borderRadius={8}
      textAlign={{ base: "center", md: "center" }}
      gridColumn={{ base: gridColumn, md: "auto" }}
    >
      <StatNumber fontSize="4xl" fontWeight="bold">
        {number}
      </StatNumber>
      <StatLabel fontSize="md" fontWeight="normal">
        {label}
      </StatLabel>
    </Stat>
  );
};

export default StatCard;
