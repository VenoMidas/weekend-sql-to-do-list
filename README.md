# SQL To-Do List

## Description

_Duration: 2 Weeks_

Need to keep track of your to-dos? Utilize this simple to-do app!

## Screenshot

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. run `npm install express` in your terminal
2. run `npm start` in your terminal. (Default port is 5000, if port is in use modify `server.js` port variable.)
3. Navigate to `localhost:5000` in browser (if port was modified, use redifined port number)

## Usage

## Built With

1. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
2. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
3. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
4. ![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
5. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
6. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and members of the Phrygian cohort who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [schuma1022@gmail.com](mailto:schuma1022@gmail.com)

## Project Checklist

### Required Features

- [ ] Create a front end experience that allows a user to create a Task.
- [ ] When the Task is created, it should be stored inside of a database (SQL)
- [ ] Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
- [ ] Each Task should have an option to 'Complete' or 'Delete'.
- [ ] When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
- [ ] Whether or not a Task is complete should also be stored in the database.
- [ ] Deleting a Task should remove it both from the front end as well as the Database.

### Styling
- [ ] Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - [ ] background color of the page
  - [ ] font family and size
  - [ ] text color & or background color of tasks *to show whether or not they have been completed*

### Database

- [ ] Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

- [ ] Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.

## Stretch Goals

For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into main using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- [ ] `feature-styling-bootstrap` 
    - [ ]  Add Bootstrap to the front end and style it up!
    - [ ] Buttons -- make the creation buttons and completion buttons green and the delete red.
    - [ ] Inputs -- make your text inputs styled in the bootstrap way
    - [ ] Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- [ ] `feature-confirm-delete`
    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
    - [ ] Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- [ ] `feature-ordering-task-query` 
    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- [ ] `feature-time-completed` 
    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.