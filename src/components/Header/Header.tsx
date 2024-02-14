import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { RiLogoutCircleFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex bg="#82cf54" p="2">
      <Box>
        <Text paddingLeft={10} fontSize="3xl" color="#e5ebff" as="b">
          Dio Bank
        </Text>
      </Box>
      <Spacer />
      {isLoggedIn && (
        <Button onClick={logout}>
          <RiLogoutCircleFill fontSize={30} color="#82cf54" />
        </Button>
      )}
    </Flex>
  );
};
