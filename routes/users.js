import express from 'express';

const router = express.Router();

const users= [

{
	
	"firstname":"john",
	"lastname": "Doe",
	"Age": 35
}

];



router.get('/', (req,res)=>{
	res.send(users);
})

export default router;