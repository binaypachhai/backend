
import os from 'os';
import fs from 'fs'
import { stringify } from 'querystring';
import express from 'express';
import mongoose from 'mongoose';



import userRoutes from './routes/userRoutes.js';


const app = express();
const port = 5000;



mongoose.connect('mongodb+srv://binaypachhai:ginger2723@cluster0.cfurd.mongodb.net/shopy').then((val) => {


  app.listen(port, () => {
    console.log('connected server is runnig in port 5000');
  })

});


app.use(express.json())
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   console.log(req.body);
//   return res.status(200).json({
//     status: 'success',
//     data: 'Welcome to backend'
//   })
// });





