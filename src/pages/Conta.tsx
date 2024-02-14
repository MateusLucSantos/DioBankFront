import { AbsoluteCenter, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }
  return (
    <AbsoluteCenter>
      <SimpleGrid columns={2} spacing={8}>
        {userData === undefined || userData === null ? (
          <Spinner size="xl" thickness="6px" color="red.400" />
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDay()} / ${
                actualData.getMonth() + 1
              } / ${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </AbsoluteCenter>
  );
};

export default Conta;
