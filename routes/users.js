import express from 'express';

const router = express.Router();

const users= [

{
	
	"firstname":"john",
	"lastname": "Doe",
	"age": 35
},

{


	"firstname":"Jane Doe",
	"lastname": "Doe",
	"age": 35

}

];





router.get('/', (req,res)=>{
	res.send(users);
})

router.post('/', (req,res)=>{

	const user = req.body;


	

});

export default router;