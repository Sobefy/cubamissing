import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { UsersIcon } from "@heroicons/react/solid";

interface SearchProps {
  placeholder: string;
  searchTerm: string;
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Search = ({ placeholder, searchTerm, handleSearch }: SearchProps) => {
  return (
    <Box>
      <FormLabel fontSize="sm">Nombre y Apellido</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={
            <UsersIcon width={18} color="var(--chakra-colors-brand-greyBlue)" />
          }
        />
        <Input
          placeholder={placeholder}
          backgroundColor="white"
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
