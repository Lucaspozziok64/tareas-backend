import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true,
        minLenght: 2,
        maxLeght: 100,
        unique: true
    },
})

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;