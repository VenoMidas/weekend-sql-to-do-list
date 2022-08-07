// console.log('Hello World');

$(document).ready(readyNow);

function readyNow() {
    // console.log('Hello jQuery');
    getTasks()
    submitButtonHandler();
};

function submitButtonHandler() {
    $('#submit-task').on('click', () => {
        if ($('#task').val() === '') {
            return;
        } else {
            // console.log('in SubmitButtonHandler');
            let taskToSend = {
                task: $('#task').val(),
                details: $('#details').val(),
                priority: $('#priority').val()
            };
            // console.log(taskToSend);
            saveTask(taskToSend);
        };
    });
};

function saveTask(newTask) {
    // console.log(newTask);
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

function getTasks() {
    // console.log('In getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        // console.log(response);
        $('#to-do-list').empty();
        for(let task of response) {
            $('#to-do-list').append(`
            <div class="list-group-item py-3 ${task.priority}">
            <span class="h5">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                ${task.task}
            </span>
            <p class="my-2 ps-5">${task.details}</p>
            <ul class="list-inline m-0 text-end">
                <li class="list-inline-item">
                    <button class="btn btn-warning btn-sm rounded-0" type="button" title="edit"><i class="bi bi-pencil-square"></i>
                </li>
                <li class="list-inline-item">
                    <button class="btn btn-danger btn-sm rounded-0" type="button" title="delete"><i class="bi bi-trash3"></i>
                </li>
            </ul>
        </div>
            `);
        }
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};