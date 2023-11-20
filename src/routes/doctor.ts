import { Router } from 'express';
import { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } from '../controllers/doctor';

const router = Router();

router.get('/', getDoctors);

router.get('/:id', getDoctorById);

router.post('/', createDoctor);

router.put('/:id', updateDoctor);

router.delete('/:id', deleteDoctor);

export default router;
