
# Toolbox-Challenge 


A simple Web App made with the MERN stack and dockerized using Docker-Compose. 






## Tech Stack

**Client:** React

**Server:** Node, Express

*The project was coded using Javascript ES6*



## App Screenshot

![App Screenshot](https://i.imgur.com/7QlnO6j.png)



## Installation

In order to build the the project with Docker, follow the instructions below:

* Clone the repository on your computer
* Step on the directory and execute *docker-compose up*

```bash
  $ cd Toolbox-Challenge/
  $ docker-compose up
```
    
Your project is now listening on port 3000.


## General Information

This Docker Stack is build for local development and not for production usage.

The project has 2 main folders:

* ./server --> Express API project
* ./client --> React website project
## Usage

* Run `npm install` to installl dependencies
* Run `npm start` to start the local server
* Run `cd client && npm test` to test the API
* Run `cd server && npm test` to test the UI
* Load `http://localhost:3000` to open the React APP.


## API Endpoints


## GET /files/data

Get a list of files data

```json
[
{
    "file": "test2.csv",
    "lines": [
        {
            "text": "kFYWwXKXxEgEyixUKHaAp",
            "number": "911919424",
            "hex": "610d2354c208085b143ff3eb21dd2ee4"
        }
    ]
},
{
    "file": "test3.csv",
    "lines": [
        {
            "text": "IQdQBbeOyfzsbIxngzxFKgJFqB",
            "number": "4",
            "hex": "a8d3615cd534ae9ca9895fe4833a4597"
        },
        {
            "text": "dCkNABZuMpHMeOrdvcFwdfhKdFsd",
            "number": "7",
            "hex": "5f9501d2aec6beca0522bd36c75f1599"
        },
        {
           "text": "nMnbGJmhkwsDXgTXhoepWUP",
           "number": "7316748426",
           "hex": "958d3a6fa2267048de6c499fb81fdea7"
        }
    ]
},
]
```
### Query params
- /files/data?fileName=test2.csv

```json
{
    "file": "test2.csv",
    "lines": [
        {
            "text": "kFYWwXKXxEgEyixUKHaAp",
            "number": "911919424",
            "hex": "610d2354c208085b143ff3eb21dd2ee4"
        }
    ]
}
```


## GET /v1/api/files/list

Get list of files names

```json
[
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test18.csv",
    "test4.csv",
    "test6.csv",
    "test9.csv",
    "test15.csv"
]
```