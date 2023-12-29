import { Box, ChakraProvider } from "@chakra-ui/react"

export const Botao = () => {
  return(
    <ChakraProvider>
      <Box as="button" borderRadius='md' bg='#82cf54' color='white' px={8} h={10} fontWeight='bold' fontSize={24}>
        Entrar
      </Box>
    </ChakraProvider>
  )
}