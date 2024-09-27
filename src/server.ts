import fastify from "fastify";
import crypto from "node:crypto";
import { knex } from "./database";
import { title } from "node:process";

const app = fastify()

app.get("/hello", async () => {
   const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*")

   return transactions
})

app
  .listen({
    port: 3333,
})
  .then(() => {
    console.log("HTTP Server Running!")
})

