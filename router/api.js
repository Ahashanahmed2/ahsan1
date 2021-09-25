


const Users = require('../modal/users');

//api find
exports.find = (req, res) => {
    
        if(req.query.id){
            const id = req.query.id;
    
            Users.findById(id)
                .then(data =>{
                    if(!data){
                        res.status(404).send({ message : "Not found user with id "+ id})
                    }else{
                        res.send(data)
                    }
                })
                .catch(err =>{
                    res.status(500).send({ message: "Erro retrieving user with id " + id})
                })
    
        }else{
            Users.find()
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
                })
        }
    }



//api post
exports.create =(req, res) => {
if(!req.body){
    res 
    return;
}
  const users = new Users({
        name:{
fname:req.body.fname,
lname:req.body.lname
        },
        email:req.body.email,
        address:req.body.address
    })
 users.save()
 .then((data)=>{
    res.redirect('/')
 })

     .catch(err=>{
res.send({
    mesage:err.message
})
     })
 
}


//api update
exports.update = (req, res) => {
    
}

//api delete
exports.delete = (req, res) => {
    
}