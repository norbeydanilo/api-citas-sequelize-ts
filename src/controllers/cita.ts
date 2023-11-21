import { RequestHandler } from 'express';
import { Cita } from '../models/cita';

// RequestHandler es responsable de manejar una solicitud HTTP, realizar alguna lógica de servidor (como interactuar con la base de datos), 
// y finalmente enviar una respuesta al cliente
export const getCitas: RequestHandler = async (req, res, next) => {
  try {
    const citas = await Cita.findAll();
    res.status(200).json({ message: 'Operación exitosa', data: citas });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener las citas', error: err.message });
  }
};

/*
export const getOneCita: RequestHandler = async (req, res, next) => {
  try {
    const { profesional, paciente, fecha } = req.body; // Asume que los IDs se pasan en el cuerpo de la solicitud
    const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_paciente: paciente } });
    if (cita) {
      res.status(200).json({ message: 'Operación exitosa', data: cita });
    } else {
      res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener la cita', error: err.message });
  }
};
*/

export const getOneCita: RequestHandler = async (req, res, next) => {
  try {
    const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
    const cita = await Cita.findOne({ where: { fecha_hora: fecha, id_profesional: profesional, id_numeroCedula: paciente } });
    if (cita) {
      res.status(200).json({ message: 'Operación exitosa', data: cita });
    } else {
      res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener la cita', error: err.message });
  }
};
// GET /citas/unica?profesional=valor&paciente=valor1&fecha=valor2

export const createCita: RequestHandler = async (req, res, next) => {
  try {
    /*
    const { id_profesional, id_numeroCedula, fecha_hora } = req.body;
    const fecha = new Date(fecha_hora);
    const id_cita = `${id_profesional}${id_numeroCedula}${fecha.getDate()}${fecha.getMonth() + 1}${fecha.getFullYear()}${fecha.getHours()}${fecha.getMinutes()}`;
    req.body.id_cita = BigInt(id_cita);
    */

    const cita = await Cita.create(req.body);
    res.status(201).json({ message: 'Cita creada exitosamente', data: cita });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al crear la cita', error: err.message });
  }
};

export const updateCita: RequestHandler = async (req, res, next) => {
  try {
    const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
    const fechaDate = new Date(fecha as string);
    const cita = await Cita.findOne({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });

    if (!cita) {
      res.status(404).json({ message: 'Cita no encontrada' });
      return;
    } else {
      await Cita.update(req.body, { where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
      res.status(200).json({
        message: 'Cita actualizada exitosamente'
      });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al actualizar la cita', error: err.stack });
  }
};

export const deleteCita: RequestHandler = async (req, res, next) => {
  try {
    const { profesional, paciente, fecha } = req.query; // Asume que los IDs se pasan como parámetros de consulta en la URL
    const fechaDate = new Date(fecha as string);
    const cita = await Cita.findOne({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });

    if (!cita) {
      res.status(404).json({ message: 'Cita no encontrada' });
      return;
    } else {
      await Cita.destroy({ where: { fecha_hora: fechaDate, id_profesional: profesional, id_numeroCedula: paciente } });
      res.status(200).json({ message: 'Cita eliminada exitosamente' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al eliminar la cita', error: err.message });
  }
};

