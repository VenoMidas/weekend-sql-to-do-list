const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool.js');

const tasks = [];

tasksRouter.post('/', (req, res) => {
    const task = req.body;
    tasks.push(task);
    // console.log(tasks);
    res.sendStatus(201);
});

tasksRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    });
});

module.exports = tasksRouter;