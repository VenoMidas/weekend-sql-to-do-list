<!-- Badges -->
![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

# SQL To-Do List

## Description

_Duration: 2 Weeks_

Need to keep track of your to-dos? Utilize this simple to-do app!

[Deployed version of app](https://sleepy-dawn-31095.herokuapp.com/)

## Screenshot

![Screenshot](images/screenShot.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)

#### Optional
- [nodemon](https://www.npmjs.com/package/nodemon)
- If you don't have nodemon installed you can change the start script in the `package.json` to `"node server/server.js"`

## Installation

1. Create a database named `weekend_to_do_app`,
2. The queries in the `weekend_to_do_app.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries,
3. Open your editor and run `npm install` in your terminal - this will install express, pg, and bootstrap.
2. run `npm start` in your terminal. (Default port is 5000, if port is in use modify `server.js` port variable.)
3. Navigate to `localhost:5000` in browser (if port was modified, use redifined port number)

## Usage

1. As a user, I want to be able to add a task to my to-do list
2. As a user, I want to be able to add details to my tasks
3. As a user, I want to be able to add a priority level to my tasks.
4. As a user, I want to be able to edit my tasks
5. As a user, I want to be able to delete my tasks
6. As a user, I want to be able to mark tasks complete

## Built With

1. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
2. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
3. ![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
4. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
5. ![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
6. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
7. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
8. ![image](https://img.shields.io/badge/Node.pg-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
9. ![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and members of the Phrygian cohort who equipped and helped me to make this application a reality.

Also thanks to the Net Ninja you tube channel for offering tutorials on bootstrap. [NetNinja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR)

## Support

If you have suggestions or issues, please email me at [schuma1022@gmail.com](mailto:schuma1022@gmail.com)

## Future updates

- [ ] Correct form-submit function - currently causes issues on iOS devices
- [ ] Change database fields to use proper types like timestamp and boolean
- [ ] Create custom bootstrap color theme
- [ ] Add Sorting capabilities
- [ ] Add Filtering capabilities
