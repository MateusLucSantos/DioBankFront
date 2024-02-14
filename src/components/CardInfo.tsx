import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent?: string;
  content?: string | number;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box bg="#fff" minHeight="20vh" p={8} borderRadius={25}>
      <Text fontSize="2xl" fontWeight="bold">
         {mainContent}
      </Text>
      <Text fontSize="xl">{content}</Text>
    </Box>
  );
};
