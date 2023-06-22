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

    let router = require('express').Router();

    // create new tutorial
    router.post('/', (req, res) => { // http://localhost:8000/api/tutorials/

    // implement
        res.send('POST Request Received.');
    });

    // retrieve all tutorials
    router.get('/', (req, res) => { // http://localhost:8000/api/tutorials/
        res.send('GET ALL Request Received.');
    })

    // retrieve one tutorial via id
    router.get('/:id', (req, res) => { // http://localhost:8000/api/tutorials/{id}
        res.send('GET ONE Request Received.');
    })

    // update one tutorial
    router.put('/:id', (req, res) => {
        res.send('UPDATE ONE Request Received.');
    }) 

    // delete all tutorials
    router.delete('/', (req, res) => { // http://localhost:8000/api/tutorials/
        res.send('DELETE ALL Request Received.');
    })

    // delete one tutorial via id
    router.delete('/:id', (req, res) => { // http://localhost:8000/api/tutorials/{id}
        res.send('DELETE ONE Request Received.');
    })

    // use the router
    app.use('/api/tutorials', router);


}

// entity ---> model
// MVC-R
// Model - View - Controller - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint