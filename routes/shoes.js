var express = require('express');
var router = express.Router();

const shoe_controlers=require('../controllers/shoe')
 
/* GET home page. */
router.get('/', shoe_controlers.shoe_view_all_Page);

/* GET detail shoe page */
router.get('/detail', shoe_controlers.shoe_view_one_Page);

/* GET create shoe page */
router.get('/create', shoe_controlers.shoe_create_Page);
/* GET create update page */
router.get('/update', shoe_controlers.shoe_update_Page);
/* GET create shoe page */
router.get('/delete', shoe_controlers.shoe_delete_Page);


 
module.exports = router;