// console.log('Hello World');

$(document).ready(readyNow);

function readyNow() {
    // console.log('Hello jQuery');
    getTasks()
    submitButtonHandler();
    deleteModalButtonHandler();
    updateModalButtonHandler();

    $('body').on('click', '.form-check-input', checkboxClick);
    $('#modalDeleteButton').on('click', deleteTask);
    $('#modalUpdateButton').on('click', updateTask);
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

function deleteModalButtonHandler() {
    $('#delete-modal').on('show.bs.modal', function (event) {
        // Button that triggered the modal
        let buttonId = $(event.relatedTarget);
        // Extract info from data-* attributes
        let deleteId = buttonId.data('id');
        // console.log(deleteId); // getting the correct ID
        // deleteTask(deleteId); // was used when setting up DELETE route
        // sets the data-id for the delete button in the modal
        $(this).find('.modal-delete-button').data('id', deleteId);
    });
};

function updateModalButtonHandler() {
    $('#update-modal').on('show.bs.modal', function (event) {
        let buttonId = $(event.relatedTarget);
        let updateId = buttonId.data('id');
        let modal = $(this)
        modal.find('.modal-update-button').data('id', updateId);
        // modal.find('.update-input-task').val();
        // modal.find('.update-input-details').val();
        // modal.find('.update-input-priority');
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
        for (let task of response) {
            $('#to-do-list').append(`
            <div class="list-group-item py-3 ${task.priority}">
            <span class="h5">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                ${task.task}
            </span>
            <p class="my-2 ps-5">${task.details}</p>
            <ul class="list-inline m-0 text-end">
                <li class="list-inline-item">
                    <button data-id="${task.id}" class="btn btn-warning btn-sm rounded-0" type="button" title="edit" data-bs-toggle="modal" data-bs-target="#update-modal"><i class="bi bi-pencil-square"></i>
                </li>
                <li class="list-inline-item">
                    <button data-id="${task.id}" class="btn btn-danger btn-sm rounded-0" type="button" title="delete" data-bs-toggle="modal" data-bs-target="#delete-modal"><i class="bi bi-trash3"></i>
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

function checkboxClick() {
    // console.log('In checkboxClick');
    // console.log($(this));
    // console.log($(this).prop("checked"));
    if ($(this).prop("checked") === true) {
        $(this).parent().parent().addClass('complete-task');
    } else {
        $(this).parent().parent().removeClass('complete-task');
    };
};

function deleteTask() {
    // console.log('In deleteTask');
    // console.log($(this).data('id'));
    let idNumber = $(this).data('id');
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${idNumber}`
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

function updateTask() {
    // console.log('In updateTask');
    // console.log($(this).data('id'));
    const taskId = $(this).data('id');
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: {
            task: $('#update-task').val(),
            details: $('#update-details').val(),
            priority: $('#update-priority').val(),
        }
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!')
    });
};