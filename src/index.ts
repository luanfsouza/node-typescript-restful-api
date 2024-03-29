import { Knex } from "./server/database/knex";
import { server } from "./server/server";

const startServer = () => {
  server.listen(process.env.PORT || 3000, () => {
    console.log(`rodando na porta: ${process.env.PORT || 3000}`);
  });
};

if (process.env.IS_LOCALHOST !== "true") {
  Knex.migrate
    .latest()
    .then(() => {
      console.debug("Migração concluída");
      Knex.seed.run().then(() => startServer()).catch(error => console.log(error));
    })
    .catch(console.log);
} else {
  startServer();
}
