const express = require('express');
const dao = require('../services/dao')
const router = express.Router();

router.get('/search', async (req, res, next)=> {
    try{
        console.log('store router run')
        let {local} = req.query;

        console.log(`local = ${local}`)
        obj = {};
        obj.local = local;
        obj.rows = await dao.getStoreIn(local);
        res.render('list', obj);
    }catch(err){
        console.error('Error while getting datas...', err.message);
        next(err)
    }
});
router.get('/search/rest', async (req, res, next)=>{
    try{
        console.log('rest api run')
        let {local} = req.query;

        console.log(`local = ${local}`)
        rows = await dao.getStoreIn(local);
        res.json(rows)
    }catch(err){
        console.error('Error while getting datas...', err.message);
        next(err)
    }
})

router.get('/', (req,res,next)=>{
    res.render("index");
})

module.exports = router;