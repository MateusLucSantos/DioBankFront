import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Botao } from "./Botao";

// interface ICard {
//   id: number;
//   paragraph: string;
//   details: string;
// }

export const Card = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="center" flex={1}>
        <Heading as="h1" color="#fff">
          Faça o login
        </Heading>
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          backgroundColor="#fff"
          pr="4.5rem"
          my={2}
          mt={10}
        />
        <InputGroup size="md" pb={18}>
          <Input
            backgroundColor="#fff"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Botao />
      </Box>
    </ChakraProvider>
  );
};
