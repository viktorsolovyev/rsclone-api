import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.get("/", (request, response) => {
  response.send({id: 1, name: "Solovyev Viktor"});
});
app.listen(port, () => console.log(`Running on port ${port}`));
