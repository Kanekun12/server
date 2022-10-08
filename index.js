import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
import multer from 'multer';
import {v4 as uuid} from 'uuid';



mongoose.Promise=global.Promise;
const dbURL='mongodb+srv://Jorge:Jorge124@cluster0.htuzihb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado a la BD en el puerto 27017'))
.catch(err=>console.log(err));


const app=express();
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


//carga de archivos

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/imagenes')
    },
    filename:(req,file,cb)=>{
        cb(null,uuid()+path.extname(file.originalname))
    }
})
app.use(multer({storage:storage}).single('image'));










app.use('/api',router);

app.listen(app.get('port'),()=>{
    console.log('Servidor ejecutado en el puerto:'+app.get('port'));
});