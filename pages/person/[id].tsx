import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import Nav from "../../src/components/Nav/Nav";
import { emptyPerson } from "../../src/consts/consts";
import usePerson from "../../src/hooks/usePerson";

const PersonPage = () => {
  const router = useRouter();
  const slug = typeof router.query.id === "string" ? router.query.id : "";

  const { filteredPerson } = usePerson(slug);
  const isLoading = !filteredPerson;
  const person =
    !isLoading && filteredPerson.length > 0 ? filteredPerson[0] : emptyPerson;

  const { firstName, lastName, image } = person;

  const fullName = `${firstName} ${lastName}`;
  const imageURL = image || "/placeholder.jpg";

  return (
    <Box minHeight="100vh">
      <Box zIndex={0}>
        <Image
          alt="Cuba"
          src="/hero-image.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Nav />
      <Box zIndex={1} position="relative">
        <Box pt={5} pb={5}>
          <Text fontSize="3xl" wordBreak="break-word">
            {fullName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonPage;
