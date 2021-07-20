import { Container as ChakraContainer } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <ChakraContainer maxW="container.lg" mx="auto" position="relative">
      {children}
    </ChakraContainer>
  );
};

export default Container;
