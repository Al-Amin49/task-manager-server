# Task Management
Welcome to the documentation for the Task Management CRUD project. This document provides an overview of the project structure, features, and instructions on how to set up and run the project.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation and Usage](#installation-and-usage)
- [Validation Rules](#validation-rules)
- [Installation & Usage](#installation-&-usage)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
  - [Create a Task](#create-a-task)
  - [Get All Tasks](#get-all-tasks)
  - [Get a Task by ID](#get-a-task-by-id)
  - [Update a Task](#update-a-task)
  - [Delete a Task](#delete-a-task)

## Introduction

The Task Management CRUD project is designed to provide a robust solution for managing tasks efficiently. Leveraging the MVC architecture, this project ensures a clean separation of concerns, making it scalable, maintainable, and highly extensible.

## Project Structure
 directory structure of project.


```plaintext

root/
│
├── controllers/
│ ├── tasks.js
│
├── db/
│ ├── connect.js
│
├── errors/
│ ├── custom-error.js
│
├── middleware/
│ ├── asyncWrapper.js
│ ├── error-handler.js
│ ├── not-found.js
│
├── models/
│ ├── task.js
│
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── main.css
│
├── routes/
│ ├── tasks.js
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```


##  Installation and Usage
1. Clone the repository
```bash
git clone https://github.com/Al-Amin49/task-manager-server.git

```
2. Install Dependecies
```bash
cd task-manager-server
npm install

```
3. Create a .env file
```bash
PORT=8000
Mongo_URI=write_your_mongodb_uri

```
4. Run the server
```
npm start
```
<<<<<<< HEAD
### Validation Rules
This section outlines the validation rules for the `Task` model in the Task Management API.


| Field        | Type     | Required | Validation                                      |
|--------------|----------|----------|-------------------------------------------------|
| title        | String   | Yes      | Max length: 30 characters, No leading/trailing whitespace |
| description  | String   | Yes      |                                                 |
| status       | String   | No       | Enum: ['Not Started', 'In Progress', 'Completed'], Default: 'Not Started' |
| dueDate      | Date     | Yes      | Must be a valid future date                     |

## API Endpoints

### Create a Task
```
POST /api/v1/tasks
```
Response
```
{
    "task": {
        "title": "Mernify2",
        "description": "task Management project2",
        "status": "In Progress",
        "dueDate": "2023-12-31T23:59:59.999Z",
        "_id": "656590bc838413806613a8f0",
        "createdAt": "2023-11-28T07:03:25.025Z",
        "updatedAt": "2023-11-28T07:03:25.025Z",
        "__v": 0
    }
}
```
### Get All Tasks
```
GET /api/v1/tasks
```
Response
```
{
    "tasks": [
        {
            "_id": "656577f9d6a7ff064f54e114",
            "title": "TypeScript",
            "description": "Interdace vs type alias",
            "status": "In Progress",
            "dueDate": "2023-12-31T00:00:00.000Z",
            "createdAt": "2023-11-28T05:17:45.763Z",
            "updatedAt": "2023-11-28T06:57:14.085Z",
            "__v": 0
        },
        {
            "_id": "6565891173ef1a2ce0c63acb",
            "title": "Mernify",
            "description": "task Management project",
            "status": "In Progress",
            "dueDate": "2023-12-31T23:59:59.999Z",
            "createdAt": "2023-11-28T06:30:41.136Z",
            "updatedAt": "2023-11-28T06:30:41.136Z",
            "__v": 0
        }
    ]
}
```
### Get a Task by ID
```
GET api/v1/tasks/:id
```
Response

```
{
    "task": {
        "_id": "656577f9d6a7ff064f54e114",
        "title": "Complete Project",
        "description": "Finish the coding project",
        "status": "In Progress",
        "dueDate": "2023-12-31T23:59:59.999Z",
        "createdAt": "2023-11-28T05:17:45.763Z",
        "updatedAt": "2023-11-28T05:17:45.763Z",
        "__v": 0
    }
}
```
### Update a Task
```
PATCH /api/v1/tasks/:id
```
Response

``` 
{
    "task": {
        "_id": "656577f9d6a7ff064f54e114",
        "title": "TypeScript",
        "description": "Interdace vs type alias",
        "status": "In Progress",
        "dueDate": "2023-12-31T00:00:00.000Z",
        "createdAt": "2023-11-28T05:17:45.763Z",
        "updatedAt": "2023-11-28T06:57:14.085Z",
        "__v": 0
    }
}
```
### Delete a Task
``` 
DELETE /api/v1/tasks/:id
```
### Special Thanks
Thanks to SJ Innovation for your Support 
