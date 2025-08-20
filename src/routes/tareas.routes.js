import { Router } from "express";
import { test, crearTarea, leerTareas } from "../controllers/tareas.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearTarea).get(leerTareas)

export default router;