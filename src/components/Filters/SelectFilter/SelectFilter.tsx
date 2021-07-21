import { Box, FormLabel, Select } from "@chakra-ui/react";

interface SelectFilterProps {
  label: string;
  options:
    | {
        id: string;
        label: string;
      }[]
    | null;
}

const SelectFilter = ({ label, options }: SelectFilterProps) => {
  return (
    <>
      {options ? (
        <Box>
          <FormLabel fontSize="sm">{label}</FormLabel>
          <Select>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </Box>
      ) : null}
    </>
  );
};

export default SelectFilter;
