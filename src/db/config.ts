import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Paciente } from "../models/paciente";
import { Cita } from "../models/cita";
import { Doctor } from "../models/doctor";

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB,
  logging: false,
  models: [Paciente, Cita, Doctor]
});

export default connection;