const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    res.json({name: "Chendy", email: "chendywidyasanti@gmail.com"});
    next();
})
router.use('/price', (req, res, next) => {
    res.json({price: 300000});
    next();
})
router.get('/customers', (req, res, next) => {
    res.json({title: "Customer"});
    next();
})

app.use('/', router);

//GET '/users' ==> [{name: Chendy}]

app.listen(4000);