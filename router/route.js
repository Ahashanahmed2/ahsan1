const axios = require('axios')
// route find
exports.find = function(req, res){
    axios.get("https://ahsan1.herokuapp.com/api/route")
    .then((data)=>{
   
    res.render('index',{
        user:data.data
    })
})
}

//route post 
exports.create = (req, res) => {
    res.render('create',{
        title:'create Page'
    })
}


//route update
exports.update = (req, res) => {
    res.render('update',{
        title:'update Page'
    })
}

