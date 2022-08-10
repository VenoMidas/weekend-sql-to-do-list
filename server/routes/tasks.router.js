const { query } = require('express');
const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool.js');

tasksRouter.post('/', (req, res) => {
    const task = req.body;
    const queryText = `INSERT INTO "tasks" ("task", "details", "priority")
                       VALUES ($1, $2, $3);`
    pool.query(queryText, [task.task, task.details, task.priority])
        .then((results) => {
            // console.log(results);
            res.send(results)
        }).catch((error) => {
            console.log('Error in POST /tasks', error);
            res.sendStatus(500);
        });
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