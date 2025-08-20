import Tarea from "../models/tarea.js";

export const test = (req, res) => {
    res.status(200);
    res.send('Primera prueba desde el backend');
}

export const crearTarea = async (req, res) => {
    try {
        console.log(req.body)

        const nuevaTarea = new Tarea(req.body)
        await nuevaTarea.save()

        res.status(200).json({ mensjae: 'La tarea fue creada exitosamente' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensjae: 'Error al crear la tarea' });
    }
}

export const leerTareas = async (req, res) => {
    try {
        const listaTareas = await Tarea.find()

        res.status(200).json(listaTareas)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Error al leer los productos' })
    }
}