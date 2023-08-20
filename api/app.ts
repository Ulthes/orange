import express, { Express, Response } from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get("/test", (_, res: Response): void => {
  res.status(200);
  res.send();
});

app.listen(port, () => {
  console.log(`⚡️[server]: running on port ${port}`);
});
