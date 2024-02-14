import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize={40}>Informações da conta</Text>;
      <Link to="/conta/1">
        <Text fontSize={30}>Conta</Text>
      </Link>
      ;
    </>
  );
};

export default ContaInfo;
