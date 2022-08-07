const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const tasks = [];

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    // console.log(tasks);
    res.sendStatus(201);
});

app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.listen(port, () => {
    console.log('Listening on port:', port);
});