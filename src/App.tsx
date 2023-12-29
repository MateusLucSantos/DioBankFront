import { AbsoluteCenter, Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Box maxW="100%" minHeight="100vh" backgroundColor="#b0f1e7">
        <Header />
        <AbsoluteCenter flexDirection="column">
          <Box
            display="flex"
            alignItems="center"
            backgroundColor="#4169e1"
            borderRadius={20}
            padding={5}
            w="30rem"
            h="40rem"
          >
            <Card />
          </Box>
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
