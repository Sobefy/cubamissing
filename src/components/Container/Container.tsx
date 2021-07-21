import { Container as ChakraContainer } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <ChakraContainer maxW="1400px" mx="auto" position="relative">
      {children}
    </ChakraContainer>
  );
};

export default Container;
