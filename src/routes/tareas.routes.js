import { Router } from "express";
import { test, crearTarea, leerTareas, leerTareasPorId, eliminarTareaPorId } from "../controllers/tareas.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearTarea).get(leerTareas)
router.route('/:id').get(leerTareasPorId).delete(eliminarTareaPorId)

export default router;