const express = require('express');
const {sellerpostctrl,
    sellerdisplayctrl,
    sellerupdatectrl,
    sellerdeletectrl,
    sellerretriveone}=require('../controllers/sellerctrl/sellerctrl');
const sellerRoute = express.Router();


sellerRoute.post('/sellerpost',sellerpostctrl);

sellerRoute.get('/sellerdisplay',sellerdisplayctrl);

sellerRoute.put('/sellerupdate/:id',sellerupdatectrl);

sellerRoute.delete('/sellerdelete/:id',sellerdeletectrl);

sellerRoute.get('/sellerupdate/:id',sellerretriveone);

module.exports=sellerRoute;