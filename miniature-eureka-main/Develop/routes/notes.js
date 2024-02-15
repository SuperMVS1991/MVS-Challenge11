const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
console.log('welcome to notes');
var data = require('../db/db.json');
router.get('/', (req, res) => {
    let results = data;
    console.log(data);
    res.json(results);
    console.log(results);
});
router.post('/', (req, res) => {
    req.body.id = data.length.toString();
    
    console.log(req.body);
    data.push(req.body);
    res.json(data);
});
router.get('/:id', (req, res) => {
    let results = data.filter(note => note.id === req.params.id);
    res.json(results);
    console.log(results);
    console.log(req.params.id);
});
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    console.log(updatedItem);
    data[id] = updatedItem;
    res.json(data);
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter(note => note.id !== req.params.id);
    res.json(data);
});
module.exports = router;