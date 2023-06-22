//tutorial.route.js
module.exports = (app) => {
    // resource group --> RESTful
    // 1. create
    // 2. read
    // 3. update
    // 4. delete

    // post *Create
    // get *Read (getOne, getAll)
    // put *Update (put, patch)
    // delete *Delete

    const tutorials = require('../controllers/tutorial.controllers');
    let router = require('express').Router();

    // create new tutorial
    router.post('/', tutorials.create);

    // retrieve all tutorials
    router.get('/', tutorials.findAll);

    // retrieve one tutorial via id
    router.get('/:id', tutorials.findOne);

    // update one tutorial
    router.put('/:id', tutorials.update);

    // delete all tutorials
    router.delete('/', tutorials.delete);

    // delete one tutorial via id
    router.delete('/:id', tutorials.deleteOne);

    // use the router
    app.use('/api/tutorials', router);


}

// entity ---> model
// MVC-R
// Model - View - Controller - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint