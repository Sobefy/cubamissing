import { Text } from "@chakra-ui/react";

interface RowProps {
  label: string;
  value: string;
}

const Row = ({ label, value }: RowProps) => {
  return (
    <Text fontSize="xl">
      {label}:
      <Text as="span" color="brand.blue" ml={2}>
        {value}
      </Text>
    </Text>
  );
};

export default Row;
