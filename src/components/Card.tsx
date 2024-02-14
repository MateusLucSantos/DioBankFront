import { Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" flex={1}>
      {children}
    </Box>
  );
};
