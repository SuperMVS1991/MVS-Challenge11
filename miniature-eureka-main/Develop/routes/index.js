const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
// TODO: import your diagnostics route

router.use('/notes', notesRouter);

console.log('welcome to api');

module.exports = router;