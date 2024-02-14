const conta = {
  email: "mateus@dio.bank",
  password: "1234",
  name: "Mateus Santos",
  balance: 2000,
  id: '1'
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 1000);
});
