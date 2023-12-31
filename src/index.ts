import { server } from "./server/server";

server.listen(process.env.PORT || 3000, () => {
  console.log(`rodando na porta: ${process.env.PORT || 3000}`);
});
