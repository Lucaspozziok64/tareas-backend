import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true,
        minLenght: 2,
        maxLeght: 100,
        unique: true
    },
    hora: {
        type: Number,
        require: true,
        minLenght: 2,
        maxLeght: 100,
    },
    descripcion_breve: {
        type: String,
        required: true,
        minLenght: 5,
        maxLenght: 250,
    }
})

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;