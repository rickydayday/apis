import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import path from 'path';




const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// app.set('views', path.join(__dirname));
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
	console.log("Hello world");
	res.render('index');  
})

app.use('/users',userRoutes);

app.listen(PORT,()=>console.log("Server Running on Port"))
