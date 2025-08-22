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

export const leerTareasPorId = async (req, res) => {
    try {
        const tareaBuscada = await Tarea.findById(req.params.id);
        if(!tareaBuscada) {
            return res.status(404).json({ mensaje: 'Tarea no econtrada' })
        }

        res.status(200).json(tareaBuscada);
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al obtener la tarea' })
    }
}

export const eliminarTareaPorId = async (req, res) => {
    try {
        const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
        if(!tareaEliminada) {
            return res.status(404).json({ mensjae: 'Tarea no encontrada' })
        }
        res.status(200).json({ mensaje: 'Tarea eliminada exitosamente' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al eliminar la tarea' })
    }
}

export const editarTareaPorId = async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body);
        if(!tareaActualizada) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' })
        }

        res.status(200).json({ mensaje: 'Tarea actualizada exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al editar la tarea' })
    }
}