import { Router } from "express";
import { test } from "../controllers/tareas.controllers.js";

const router = new Router()

router.route('/test').get(test)

export default router;