import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import path  from 'path';
import {fileURLToPath} from 'url';
import auth from 'express-openid-connect'
// const {auth} = require ('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:5000',
  clientID: 'n8mCa8iFf53aSlTllzl3mgDRYS77WjTR',
  issuerBaseURL: 'https://dev-iehzembm.us.auth0.com',
  secret: '7eFoRFGK1zSPQQeL2sHWOUnW6kK9Jb17PTEW48i4YhDr5nO41e_BIlPylY6_kyD9'
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;


// app.use(auth(config))


app.get('/login', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});






app.use(bodyParser.json());
app.set('resources', path.join(__dirname));
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
	console.log("Hello world");
	res.render('index'); 
	 
});

app.get('/products/labs',(req,res)=>{
	console.log("Navigated to products page");
	res.render('products'); 
	 
});



app.use('/users',userRoutes);

app.listen(PORT,()=>console.log("Server Running on Port"))
