# Global Todo

<img src="todo.png" alt="global todo" width="50" />
Just a simple global todo app

## Deploy To

[Heroku](https://global-todo.herokuapp.com/)

## Installation

After cloning this repo, `cd` into it and on your command line run `npm install` to install the dependencies

```sh
git clone <GIT_REPO_URL> && cd global-todo-be && npm install
```

### Environment

- Create an `.env` file in the root directory and provide the values as specified below

```js
PORT = 4040;
DATABASE_URL = "<MONGODB_URL>";
NODE_ENV = "development";
```

- Use `npm run start:dev` to start the app

```sh
npm run start:dev
```

### ENDPOINTS

<table>
<tr><th>S/N</th><th>VERBS</th><th>API ENDPOINTS</th><th>ACTION</th></tr>
<tr><td>1</td><td>POST</td> <td>.../api/v1/todos</td>  <td>Create a todo</td></tr>
<tr><td>2</td><td>GET</td> <td>.../api/v1/todos</td>  <td>Get all todos</td></tr>
<tr><td>3</td><td>GET</td> <td>.../api/v1/todos/:id</td>  <td>Get a single todo</td></tr>
<tr><td>4</td><td>PUT</td> <td>.../api/v1/todos/:id</td>  <td>Update a todo</td></tr>
<tr><td>5</td><td>DELETE</td> <td>.../api/v1/todos/:id</td>  <td>Delete a todo</td></tr>
</table>

---

### SAMPLES

```json
// GET (Fetch all todos)
// http://localhost:4040/api/v1/todos

// Response
{
  "method": "GET",
  "status": 200,
  "data": {
    "todos": [
      {
        "_id": "6074b121d5730cb7bc7178be",
        "userId": "1",
        "todoText": "Do some workout",
        "completed": false,
        "createdAt": "2021-04-12T20:44:17.782Z",
        "updatedAt": "2021-04-12T20:44:17.782Z",
      }
    ],
    "message": "Todos fetched successfully"
  }
}
```

```json
// GET (Fetch a todo)
// http://localhost:4040/api/v1/todos/6074b121d5730cb7bc7178be

// Response
{
  "method": "GET",
  "status": 200,
  "data": {
    "todo": {
      "_id": "6074b121d5730cb7bc7178be",
      "userId": "1",
      "todoText": "Do some workout",
      "completed": false,
      "createdAt": "2021-04-12T20:44:17.782Z",
      "updatedAt": "2021-04-12T20:44:17.782Z",
    },
    "message": "Fetched todo successfully"
  }
}
```

```json
// POST (Create a todo)
// http://localhost:4040/api/v1/todos

// Request
{
   "todoText": "Wash dishes again",
}

// Response
{
    "method": "POST",
    "status": 201,
    "data": {
        "todo": {
            "_id": "6074e6d2fcf5e02dc7c9260f",
            "userId": "1",
            "todoText": "Wash dishes again",
            "completed": false,
            "createdAt": "2021-04-13T00:33:22.576Z",
            "updatedAt": "2021-04-13T00:33:22.576Z",
        },
        "message": "Todo created successfully"
    }
}
```

```json
// PUT
// http://localhost:4040/api/v1/todos/6074e6d2fcf5e02dc7c9260f

// Request
{
  "todoText": "Wash dishes again and again",
  "completed": true
}

// Response
{
    "method": "POST",
    "status": 201,
    "data": {
        "todo": {
            "_id": "6074e6d2fcf5e02dc7c9260f",
            "userId": "1",
            "todoText": "Wash dishes again and again",
            "completed": true,
            "createdAt": "2021-04-13T00:33:22.576Z",
            "updatedAt": "2021-04-13T00:33:22.576Z",
        },
        "message": "Todo updated successfully"
    }
}
```

```json
// PUT
// http://localhost:4040/api/v1/todos/6074e6d2fcf5e02dc7c9260f

// Response
{
  "method": "DELETE",
  "status": 200,
  "data": {
    "message": "Todo deleted successfully"
  }
}
```
