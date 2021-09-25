const axios = require('axios')

// route find
exports.find = function(req, res){
    
    axios.get('https://ahsan1.herokuapp.com/api/route')
    .then(function(re){
        res.render('index',{user:re.data})
})
.catch(err=>{
    res.send(err)
})

}

//route post 
exports.create = (req, res) => {
    res.render('create',{
        title:'create Page'
    })
}

 
//route update
exports.update =async (req, res) => {
   await axios.get('https://ahsan1.herokuapp.com/api/route',{params:{id:req.query.id}})
    .then(function(re){
        res.render('update',{user:re.data})
})
.catch(err=>{
    res.send(err)
})
        
    }
   


       
    
