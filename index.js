import express from "express";
import cors from "cors";
import winston from "winston";
import animalRouter from "./routes/animal.route.js";
import proprietarioRoute from "./routes/proprietario.route.js";
import servicoRoute from "./routes/servico.route.js";
import blogRoute from "./routes/blog.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${ timestamp } [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "petshop-api.log"}),    
  ],
  format: combine(
    label({ label: "store-api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/animal", animalRouter);
app.use("/proprietario", proprietarioRoute);
app.use("/servico", servicoRoute);
app.use("/post", blogRoute);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(5000, () => console.log("API Started!"));