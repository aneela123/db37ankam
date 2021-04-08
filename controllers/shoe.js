var Shoe = require('../models/shoes');
// List of all shoes
exports.shoe_list = async function (req, res) {
    try {
        theShoes = await Shoe.find();
        res.send(theShoes);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific shoe.
exports.shoe_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe detail: ' + req.params.id);
};
// Handle shoe create on POST.
exports.shoe_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Shoe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.shoename = req.body.shoename;
    document.type = req.body.type;
    document.color = req.body.color;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle shoe delete form on DELETE.
exports.shoe_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
};
// Handle shoe update form on PUT.
exports.shoe_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function (req, res) {
    try {
        theshoees = await Shoe.find();
        console.log("njfndw")
        res.render('shoes', { title: 'shoe Search Results', results: theshoes });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};