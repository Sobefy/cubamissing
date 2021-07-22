import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Nav from "../../src/components/Nav/Nav";
import usePerson from "../../src/hooks/usePerson";

const PersonPage = () => {
  const router = useRouter();
  const slug = typeof router.query.id === "string" ? router.query.id : "";

  const { filteredPerson } = usePerson(slug);
  const isLoading = !filteredPerson;
  const person =
    !isLoading && filteredPerson.length > 0 ? filteredPerson[0] : null;

  return (
    <Box>
      <Nav />
      Person {slug}
    </Box>
  );
};

export default PersonPage;
