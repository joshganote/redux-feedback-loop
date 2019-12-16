# Redux Feedback Loop

## Description
Duration: 2 days

A feedback form is an easy way to get insight on how likely a user may repeat using your service. I come across feedback surveys on YouTube before a video, and on subscription based education sites when either completing a course, or canceling subscription. This project will give you insight on how to create a simple multi page feedback form, where the user is required to provide input before moving to the next page, giving them the option to change input, and reviewing all input provided before submitting the form.

I will show you how to separate each feedback question into separate pages while iterating new data with each new input. We want to make it a requirement that the user adds feedback by selecting a number 1-5, the option to go back and change that input, option to add a comment, and then be taken back to the beginning where they can start the process over again. I can solve that with input validation, a button that will take them to the next  page, a button that will take them to the previous page, and a submit button that will send that data to a server that will store it in a database.

## Screen Shot

![image](wireframes/SecondPage.png).
![image](wireframes/InvalidInput.png).
![image](wireframes/SubmitPage.png).

## Installation

Fork and clone repository

1. Create a database named prime_feedback
2. the queries in data.sql file will help create the table and give some initial data to test. This project
is built on Postgres so you will need to have that installed. I recommend using Postico to run those queries.
3. Once your editor is open run npm install in terminal
4. npm run server in terminal
5. npm run client in terminal
6. the npm run client command will open a new browser tab for you

## Usage 

1. On the 'How are you feeling?' page, the User will be provided with an input field and 'next' button. There is a place holder which tells the user to pick a number 1-5. If the user doesn't pick one of those numbers, or doesn't pick a number at all, an alert message will appear and the input will reset. If the user selects a valid input they will be directed to the next page by clicking 'Next'.
2. On the 'Understanding', 'Support', and 'Comments' page the same setup will apply, but this time there is a 'Back' button. The user will have the option to return to the previous page and change their answer.
3. On the 'Review Your Feedback' page the user can see all of their inputs, and still opt to go back, or submit.
4. By hitting the submit button the input values will post to your database.
5. After the feedback is submitted the user will be taken to one last page, where they are thanked for their submission,and given the opportunity to repeat the process. Creating the 'loop' in this redux feedback loop project.

## Built With

* React
* Redux
* Axios
* Node Modules
* PostgresSQL
* Postico
* Postman

## Acknowledgement

Thanks to Prime Digital Academy in Kansas City who equipped and helped me to make this application a reality.

## Support

if you would to give your own feedback to me, please email me at j.ganote0825@gmail.com




