import mongoose,{Schema} from "mongoose";

const persona=new Schema({
    nombre:String,
    apellidos:String,
    email:String,
    password:String,
    sexo:String,
    edad:String,
    createdAct:{type:Date, default:Date.now}
});

const Personas=mongoose.model('persona',persona);
export default Personas;