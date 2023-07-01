import express, { json, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/index.routes";
import httpStatus from "http-status";

dotenv.config();

const app = express();
app.use(json());
app.use(router);

app.get('/health', (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("I'm alive!")
});

const PORT: number = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});