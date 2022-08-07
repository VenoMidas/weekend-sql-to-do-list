const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const tasksRouter = require('./routes/tasks.router');

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', tasksRouter);


app.listen(port, () => {
    console.log('Listening on port:', port);
});