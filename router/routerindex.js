//import external
const express = require('express');
const router = express.Router()

//import internal
const route =require('./route')
const api = require('./api')

//router page
router.get('/',route.find)
router.get('/create',route.create)
router.get('/update', route.update)

//API
router.get('/api/route',api.find)
router.post('/api/route',api.create)
router.put('/api/route/:id',api.update)
router.delete('/api/route/:id', api.delete)

module.exports = router;