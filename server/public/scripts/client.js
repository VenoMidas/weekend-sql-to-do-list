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
                priority: $('#priority').val(),
                created: setDateTime()
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
        const buttonId = $(event.relatedTarget);
        const updateId = buttonId.data('id');
        const modal = $(this)
        modal.find('.modal-update-button').data('id', updateId);
        $.ajax({
            type: 'GET',
            url: `/tasks/${updateId}`
        }).then(function (response) {
            // console.log(response);
            modal.find('#update-task').val(response[0].task);
            modal.find('#update-details').val(response[0].details);
            modal.find('#update-priority').val(response[0].priority);
        }).catch(function (error) {
            console.log(error);
            alert('Something went wrong!');
        });
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
        let checkboxClass;
        let checked;
        let displayTime;
        $('#to-do-list').empty();
        for (let task of response) {
            if (task.completed === 'true') {
                checkboxClass = 'complete-task';
                checked = 'checked';
            } else {
                checkboxClass = '';
                checked = '';
            };
            displayTime = checkTimeStatus(task);
            $('#to-do-list').append(`
            <div class="${checkboxClass} list-group-item py-3 ${task.priority}">
            <span class="h5">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" data-id="${task.id}" ${checked}>
                ${task.task}${displayTime}
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
    const taskId = $(this).data('id');
    // console.log(taskId);
    if ($(this).prop("checked") === true) {
        $.ajax({
            type: 'PUT',
            url: `/tasks/checked/${taskId}`,
            data: {
                completed: 'true',
                finished: setDateTime()
            }
        }).then(function (response) {
            getTasks();
        }).catch(function (error) {
            console.log(error);
            alert('Something went wrong!')
        });
    } else {
        $.ajax({
            type: 'PUT',
            url: `/tasks/checked/${taskId}`,
            data: {
                completed: 'false',
                finished: '',
            }
        }).then(function (response) {
            getTasks();
        }).catch(function (error) {
            console.log(error);
            alert('Something went wrong!')
        });
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
            updated: setDateTime()
        }
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!')
    });
};

function setDateTime() {
    let currentdate = new Date(); 
    let dateTime = (currentdate.getMonth()+1) + "/"
                   + currentdate.getDate()  + "/" 
                   + currentdate.getFullYear() + " @ "  
                   + currentdate.getHours() + ":"  
                   + currentdate.getMinutes();
    // console.log(dateTime);
    return dateTime;
};

function checkTimeStatus(object) {
    if (object.finished === '' && object.updated === '') {
        return ' - created on : ' + object.created;
    } else if (object.finished === '') {
        return ' - updated on : ' + object.updated;
    } else {
        return ' - finished on : ' + object.finished;
    };
};