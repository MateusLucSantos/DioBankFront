import { login } from "./login";

describe("login", () => {
  const mockEmail = "mateus@dio.bank";
  const mockPassword = "1234";
  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email e senha seja inválido", async () => {
    const response = await login("email@invalido.com","1234");
    expect(response).toBeFalsy();
  });

});
