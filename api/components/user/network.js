const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const Controller = require('./index')
router.get('/',(req,res)=>{
    const lista = Controller.list()
    response.success(req,res,lista, 200)
})
router.get('/:id',(req,res) => {
    const user = Controller.get(req.params.id)
    response.success(req,res,lista,200)
})
module.exports = router