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
  } = person;
  const {
    province: provinceLabel,
    lastSeen: lastSeenLabel,
    stopHour: stopHourLabel,
    stopDate: stopDateLabel,
    lastReport: lastReportLabel,
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

      <Flex mb={4}>
        <Box>
          <Text fontSize="xl">{fullName}</Text>
          <Text>
            {provinceLabel}
            <Text as="span" color="brand.blue">
              {province}
            </Text>
          </Text>
        </Box>
      </Flex>
      <Box>
        {lastSeenLabel}
        <Text as="p" color="brand.blue">
          {lastSeen}
        </Text>
        {`. ${stopHourLabel}`}
        <Text as="p" color="brand.blue">
          {stopHour}
        </Text>
        {`. ${stopDateLabel}`}
        <Text as="p" color="brand.blue">
          {stopDate}
        </Text>
        {`. ${lastReportLabel}`}
        <Text as="p" color="brand.blue">
          {lastReport}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
