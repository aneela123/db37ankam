var express = require('express');
var router = express.Router();

const shoe_controlers=require('../controllers/shoe')
 // A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET home page. */
router.get('/', shoe_controlers.shoe_view_all_Page);

/* GET detail shoe page */
router.get('/detail', shoe_controlers.shoe_view_one_Page);

/* GET create shoe page */
router.get('/create',secured, shoe_controlers.shoe_create_Page);
/* GET create update page */
router.get('/update',secured, shoe_controlers.shoe_update_Page);
/* GET create shoe page */
router.get('/delete', secured,shoe_controlers.shoe_delete_Page);


 
module.exports = router;