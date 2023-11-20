import express from "express";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";
import doctorRouter from './routes/doctor';
import pacienteRouter from './routes/paciente';
import citaRouter from './routes/cita';
import * as dotenv from "dotenv";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();
dotenv.config();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use('/doctors', doctorRouter);
app.use('/pacientes', pacienteRouter);
app.use('/citas', citaRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome! Go to /api-docs to see documentation");
})

app.use((req: express.Request, res: express.Response) => {
  res.status(404).send({ error: 'Not Found', message: 'URL Not Found' });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.log("Err", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});
