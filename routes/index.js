// imports
const express = require('express');


// Route to the appropriate controller
const router = express.Router();
router.use('/subs', require('./subscriptions'));
