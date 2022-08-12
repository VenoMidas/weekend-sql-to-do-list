const { query } = require('express');
const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool.js');

tasksRouter.post('/', (req, res) => {
    const task = req.body;
    const queryText = `INSERT INTO "tasks" ("task", "details", "priority", "created")
                       VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [task.task, task.details, task.priority, task.created])
        .then((results) => {
            // console.log(results);
            res.send(results)
        }).catch((error) => {
            console.log('Error in POST /tasks', error);
            res.sendStatus(500);
        });
});

tasksRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    });
});

tasksRouter.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks/:id', error);
        res.sendStatus(500);
    });
});

tasksRouter.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "tasks" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
        .then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in tasks DELETE', error);
            res.sendStatus(500);
        });
});

tasksRouter.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = req.body;
    const queryText = `UPDATE "tasks" 
                       SET "task" = $1, 
                           "details" = $2, 
                           "priority" = $3, 
                           "updated" = $5
                       WHERE "id" = $4;`;
    pool.query(queryText, [task.task, task.details, task.priority, taskId, task.updated]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in PUT task', error);
        res.sendStatus(500);
    });
});

tasksRouter.put('/checked/:id', (req, res) => {
    const taskId = req.params.id;
    // console.log('Task ID', taskId);
    const task = req.body;
    // console.log('task completed', task.completed);
    const queryText = `UPDATE "tasks"
                       SET "completed" = $1,
                           "finished" = $3
                       WHERE "id" = $2;`;
    pool.query(queryText, [task.completed, taskId, task.finished]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in PUT task', error);
        res.sendStatus(500);
    });
});

module.exports = tasksRouter;