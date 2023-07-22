import express, {Express, Request, Response} from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): void => {
    res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`⚡️[server]: running on port ${port}`);
});