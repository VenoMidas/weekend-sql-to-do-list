const express = require('express');
const tasksRouter = express.Router();

const tasks = [];

tasksRouter.post('/', (req, res) => {
    const task = req.body;
    tasks.push(task);
    // console.log(tasks);
    res.sendStatus(201);
});

tasksRouter.get('/', (req, res) => {
    res.send(tasks);
});

module.exports = tasksRouter;