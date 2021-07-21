import { Box, FormLabel, Select } from "@chakra-ui/react";

interface SelectFilterProps {
  label: string;
  options:
    | {
        id: string;
        label: string;
      }[]
    | null;
  value: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const SelectFilter = ({
  label,
  options,
  onChange,
  value,
}: SelectFilterProps) => {
  const selectedValue = value || "all";
  return (
    <>
      {options ? (
        <Box>
          <FormLabel fontSize="sm">{label}</FormLabel>
          <Select onChange={onChange} value={selectedValue}>
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
