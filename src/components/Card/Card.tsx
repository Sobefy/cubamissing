/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Text } from "@chakra-ui/react";
import { cardTranslations, person } from "../../types/types";

interface CardProps {
  person: person;
  translations: cardTranslations;
  onClick(id: string): void;
}

const Card = ({ person, translations, onClick }: CardProps) => {
  const {
    firstName,
    lastName,
    province,
    stopDate,
    lastReport,
    age,
    image,
    id,
  } = person;
  const {
    province: provinceLabel,
    stopDate: stopDateLabel,
    lastReport: lastReportLabel,
    age: ageLabel,
  } = translations;

  const fullName = `${firstName} ${lastName}`;
  const imageURL = image || "/placeholder.jpg";

  return (
    <Box
      backgroundColor="white"
      px={10}
      py={10}
      boxShadow="brand.whiteShadow"
      borderRadius={8}
      width="full"
      onClick={() => onClick(id)}
      cursor="pointer"
      _hover={{ boxShadow: "xl" }}
    >
      <Box width="full" boxShadow="brand.innerShadow">
        <img alt="Person's image" src={imageURL} style={{ width: "100%" }} />
      </Box>
      <Box pt={5} pb={5}>
        <Text fontSize="2xl" wordBreak="break-word">
          {fullName}
        </Text>
      </Box>
      <Box>
        <Text>
          {ageLabel}
          <Text as="span" color="brand.blue">
            {age}
          </Text>
        </Text>
        <Text>
          {provinceLabel}
          <Text as="span" color="brand.blue">
            {province}
          </Text>
        </Text>
      </Box>
      <Flex>
        <Text>
          {lastReportLabel}
          <Text as="span" color="brand.blue">
            {lastReport}
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
