import { Router } from "express";
import tareasRoutes from '../routes/tareas.routes.js';

const router = new Router();

router.use('/tareas', tareasRoutes);

export default router;