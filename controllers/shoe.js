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
exports.shoe_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Shoe.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Shoe update form on PUT.
exports.shoe_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Shoe.findById( req.params.id)
        // Do updates of properties
        if(req.body.shoename) toUpdate.shoename = req.body.shoename;
        if(req.body.type) toUpdate.type = req.body.type;
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.price) toUpdate.price = req.body.price;

        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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