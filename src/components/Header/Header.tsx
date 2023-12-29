import { Box, ChakraProvider, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box bg="#82cf54" p="2">
        <Text paddingLeft={10} fontSize='3xl' color='#e5ebff' as='b'>Dio Bank</Text>
      </Box>
    </ChakraProvider>
  );
};
