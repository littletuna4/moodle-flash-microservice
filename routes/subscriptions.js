// handles post and get requests for subscriptions
// this is imported by the index.js file at "/subs" endpoint

// import express and prisma
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

// The subs post function

const postSub = async (req, res) => {
    const { args_i_guess } = req.body;
    // do something 
    res.json();
}

// Now handle and export
const router = express.Router();
router.post('/', postSub);
