import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import Container from "../Container/Container";

const Header = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("https://cubamissing.com/");
  };

  return (
    <Box backgroundColor="white" height="162px">
      <Container>
        <Box cursor="pointer" onClick={onClick}>
          <Image
            alt="Cuba"
            src="/cropped-logo-website.png"
            width="302px"
            height="132px"
            quality={100}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
