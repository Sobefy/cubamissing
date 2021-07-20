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
      px={6}
      py={10}
      boxShadow="brand.whiteShadow"
      borderRadius={8}
    >
      <Flex>
        <Box mr={4}>
          <SkeletonCircle size="16" />
        </Box>
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
        <Text as="span" color="brand.blue">
          {lastSeen}
        </Text>
        {`. ${stopHourLabel}`}
        <Text as="span" color="brand.blue">
          {stopHour}
        </Text>
        {`. ${stopDateLabel}`}
        <Text as="span" color="brand.blue">
          {stopDate}
        </Text>
        {`. ${stopDateLabel}`}
        <Text as="span" color="brand.blue">
          {stopDate}
        </Text>
        {`. ${lastReportLabel}`}
        <Text as="span" color="brand.blue">
          {lastReport}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
