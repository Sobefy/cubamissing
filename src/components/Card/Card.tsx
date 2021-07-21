/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Box, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
import { cardTranslations, person } from "../../types/types";

interface CardProps {
  person: person;
  translations: cardTranslations;
}

const Card = ({ person, translations }: CardProps) => {
  const {
    firstName,
    lastName,
    province,
    lastSeen,
    stopHour,
    stopDate,
    lastReport,
    age,
    image,
  } = person;
  const {
    province: provinceLabel,
    lastSeen: lastSeenLabel,
    stopHour: stopHourLabel,
    stopDate: stopDateLabel,
    lastReport: lastReportLabel,
    age: ageLabel,
    verification,
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
    >
      <Box>
        <img alt="Person's image" src={imageURL} width="100%" />
      </Box>

      <Box pt={5} pb={5}>
        <Text fontSize="3xl">{fullName}</Text>
      </Box>

      <Flex mb={4}>
        <Box mr={4}>
          <Text>
            {provinceLabel}
            <Text as="span" color="brand.blue">
              {province}
            </Text>
          </Text>
        </Box>

        <Box>
          {ageLabel}
          <Text as="span" color="brand.blue">
            {age}
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Text>
          {stopDateLabel}
          <Text as="span" color="brand.blue">
            {stopDate}
          </Text>
        </Text>
      </Flex>
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
