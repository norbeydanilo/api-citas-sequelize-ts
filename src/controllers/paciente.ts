import { RequestHandler } from 'express';
import { Paciente } from '../models/paciente';

// RequestHandler es responsable de manejar una solicitud HTTP, realizar alguna lógica de servidor (como interactuar con la base de datos), 
// y finalmente enviar una respuesta al cliente
export const getPacientes: RequestHandler = async (req, res, next) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json({ message: 'Operación exitosa', data: pacientes });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener los pacientes', error: err.message });
  }
};

export const getPacienteById: RequestHandler = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      res.status(200).json({ message: 'Operación exitosa', data: paciente });
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener el paciente', error: err.message });
  }
};

export const createPaciente: RequestHandler = async (req, res, next) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json({ message: 'Paciente creado exitosamente', data: paciente });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al crear el paciente', error: err.message });
  }
};

export const updatePaciente: RequestHandler = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) {
      res.status(404).json({ message: 'Paciente no encontrado' });
      return;
    } else {
      await Paciente.update(req.body, { where: { id_numeroCedula: req.params.id } });
      const updatedPaciente = await Paciente.findByPk(req.params.id);
      res.status(200).json({ message: 'Paciente actualizado exitosamente', data: updatedPaciente });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al actualizar el paciente', error: err.message });
  }
};

export const deletePaciente: RequestHandler = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) {
      res.status(404).json({ message: 'Paciente no encontrado' });
      return;
    } else {
      await Paciente.destroy({ where: { id_numeroCedula: req.params.id } });
      res.status(200).json({ message: 'Paciente eliminado exitosamente' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al eliminar el paciente', error: err.message });
  }
};
