//api find
const Users = require('../modal/users')

exports.find = (req, res) => {
    Users.find()
    .then((data)=>{
        res.send(data)
    })
}

//api post
exports.create =(req, res) => {
if(!req.body){
    res 
    return;
}
  const users = new Users({
        name:req.body.name,
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