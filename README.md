# Task Management
Welcome to the documentation for the Task Management CRUD project. This document provides an overview of the project structure, features, and instructions on how to set up and run the project.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
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


```plaintext

├── /controllers
├── /models
├── /routes
├── /middlewares
├── /config
├── /public
│   ├── index.html
│   ├── styles
│   │   └── main.css
│   └── favicon.ico
├── server.js
└── package.json
```


##  Installation & Usage
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
