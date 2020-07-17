
# Simple messageing app
![GitHub last commit](https://img.shields.io/github/last-commit/terragady/short-message-board)
![GitHub language count](https://img.shields.io/github/languages/count/terragady/short-message-board)
![GitHub top language](https://img.shields.io/github/languages/top/terragady/short-message-board)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/terragady/short-message-board)
![GitHub repo size](https://img.shields.io/github/repo-size/terragady/short-message-board)
![GitHub](https://img.shields.io/github/license/terragady/short-message-board)

## Description

Simple app created with nodejs with express on backend and vanilla javascript with HTML and CSS on front end. Using mongoDB to store messages.

## Deployment

App is deployed on heroku based on last master branch commit [https://messaging-app-hackday.herokuapp.com/](https://messaging-app-hackday.herokuapp.com/)

## Usage

To use locally all you have to do is clone the repo, install dependencies and create *config.env* file with credencials to your database

## Development

### BackEnd

- [x] Configure express with middleware
- [x] Limit POST frequency for security
- [x] Implement pagination
- [x] Configure and connect to mongoDB
- [x] Create validation for entries
- [x] Serve static files of client

### FrontEnd

- [x] Ability to add message
- [x] Show all messages from database with time, name and text
- [x] Use pagination from backend
- [x] Do some simple styling without framework
- [x] Responsivness, mobile first approach

