import express from "express";
import { homeRoutes, linesRoutes } from "./routes";

const app = express();
const port = 8080;

app.use(function enableCors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});
app.use(express.json());

app.use("/", homeRoutes);
app.use("/lines", linesRoutes);
app.use(function(_req: express.Request, res: express.Response) {
  res.status(404).send("Not found");
});
app.get("/hello", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Backend listening on port ${port}!`));
