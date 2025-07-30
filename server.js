import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/dbconnect.js"; 
import userrouter from './router/userroutes.js';
const app = express();
dotenv.config();//load env variables
connectdb();//connect to database

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/',(req,res)=>{
    res.status(200).send("server is running fine");
})
app.get('api/home',(req,res)=>{
    res.status(200).send("home page route checking");
})

app.use('/api',userrouter)
let port=process.env.port ||5051;
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
