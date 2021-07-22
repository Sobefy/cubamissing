import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Box
      px={6}
      py={10}
      boxShadow="brand.whiteShadow"
      borderRadius={8}
    >
      <Flex mb={4}>
        <Box mr={4}>
          <SkeletonCircle size="16" />
        </Box>
        <Box width="full">
          <Skeleton height="20px" mb={4} />
          <Skeleton height="10px" />
        </Box>
      </Flex>
      <Box>
        <SkeletonText noOfLines={4} spacing="4" />
      </Box>
    </Box>
  );
};

export default CardSkeleton;
