import { Box, ChakraProvider } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
  onClick: MouseEventHandler;
}

export const Botao = ({ onClick }: IDButton) => {
  return (
    <ChakraProvider>
      <Box
        as="button"
        borderRadius="md"
        bg="#82cf54"
        color="white"
        px={8}
        h={10}
        fontWeight="bold"
        fontSize={24}
        onClick={onClick}
      >
        Entrar
      </Box>
    </ChakraProvider>
  );
};
