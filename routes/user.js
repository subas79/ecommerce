const router = require("express").Router();

router.get('/usertest', (req, res)=>{
res.send('user test is successful')
})

router.post('/userposttest', (req, res)=>{
    let username =  req.body.username;
    res.send("my name is " + username)
})

module.exports = router;