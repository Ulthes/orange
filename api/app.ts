import express, { Express, Response } from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get("/", (_, res: Response): void => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: running on port ${port}`);
});
