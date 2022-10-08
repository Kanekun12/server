import mongoose,{Schema} from "mongoose";

const persona=new Schema({
    nombre:String,
    apellidos:String,
    direccion:String,
    profesion: String,
    edad: Number,
    sexo:String,
    filename:String,
    path:String,
    createdAct:{type:Date, default:Date.now}
});

const Personas=mongoose.model('persona',persona);
export default Personas;