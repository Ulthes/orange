import express, { Express, Response } from "express";

const server: Express = express();
const port: string | number = process.env.PORT || 3000;

server.get("/test", (_, res: Response): void => {
  res.status(200);
  res.send();
});

server.listen(port, () => {
  console.log(`⚡️[server]: running on port ${port}`);
});

export {server};