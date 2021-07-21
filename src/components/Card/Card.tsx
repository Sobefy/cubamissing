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

  return (
    <Box
      backgroundColor="white"
      px={10}
      py={10}
      boxShadow="brand.whiteShadow"
      borderRadius={8}
    >
      <Box>

        <Image
          alt="Cuba"
          src="/placeholder.jpg"
          layout="responsive"
          width="150px"
          height="150px"
          objectFit="cover"
          quality={100}
        />

      </Box>

      <Box py={10}>
        <Text fontSize="2xl">{fullName}</Text>
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
    </Box>
  );
};

export default Card;
