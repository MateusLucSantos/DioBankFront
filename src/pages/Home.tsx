import {
  AbsoluteCenter,
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Botao } from "../components/Botao";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (loggedIn) {
      setIsLoggedIn(true);
      changeLocalStorage({ login: true });
      navigate("/conta/1");
    } else {
      alert("Email e senha inválido");
    }
  };

  const handleClick = () => setShow(!show);
  return (
    <AbsoluteCenter flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="#4169e1"
        borderRadius={20}
        padding={5}
        w="30rem"
        h="30rem"
      >
        <Card>
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputGroup size="md" pb={18}>
            <Input
              backgroundColor="#fff"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Botao
            onClick={() => {
              validateUser(email, senha);
            }}
          />
        </Card>
      </Box>
    </AbsoluteCenter>
  );
};

export default Home;
