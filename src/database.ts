import { knex as setupKnex } from "knex";

export const knex = setupKnex({
    //Qual banco de dados estamos usando.
    client: "sqlite",
    //Informações sobre minha conexão.
    connection: {
        filename: "./tmp/app.db",
    },
})