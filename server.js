import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'; 
import { notFound, errorHandler } from './middleware/errorMiddleware.js';



import productRoutes from './routes/productRoutes.js'; //importar el router de productRoutes 

dotenv.config();

connectDB(); //conecta con la base de datos mongoDB y si no existe la crea

const app = express(); 


app.get('/', (req, res) => {
    res.send('Api is working');
})

app.use('/api/products', productRoutes); //usa el router de productRoutes

app.use(notFound)


app.use(errorHandler) //middleware que se ejecuta antes de que se ejecute cualquier ruta))

const PORT = process.env.PORT || 5000; 


//servidor corriendo 
app.listen(PORT, console.log
    (`Server running in ${process.env.NODE_ENV} on port ${PORT}`
    .green.underline.bold)); 