import { Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box maxW="100%" minHeight="100vh" backgroundColor="#b0f1e7">
        {children}
      </Box>
    </>
  );
};
