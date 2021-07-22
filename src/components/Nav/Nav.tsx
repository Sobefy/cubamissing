import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Box
      height="120px"
      boxShadow="md"
      zIndex={1}
      position="relative"
      backgroundColor="white"
    >
      <Center py="10px">
        <Box cursor="pointer" onClick={handleClick}>
          <Image
            alt="Cuba"
            src="/hero-image.svg"
            quality={100}
            height="100px"
            width="200px"
          />
        </Box>
      </Center>
    </Box>
  );
};

export default Nav;
