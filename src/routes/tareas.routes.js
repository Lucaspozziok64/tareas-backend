import { Router } from "express";
import { test, crearTarea } from "../controllers/tareas.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearTarea)

export default router;