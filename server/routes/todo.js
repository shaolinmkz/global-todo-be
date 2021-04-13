import express from 'express';
import { createTodo, fetchTodos, fetchSingleTodo, updateTodo, deleteTodo } from '../controllers/Todo';
import validateTodoText from '../middlewares/validateTodoText';
import validateTodoBody from '../middlewares/validateTodoBody';
import isExist from '../middlewares/isExist';

const todo = express.Router();

todo.post('/todos', validateTodoText, createTodo);
todo.get('/todos', fetchTodos);
todo.get('/todos/:id', isExist, fetchSingleTodo);
todo.put('/todos/:id', isExist, validateTodoBody, updateTodo);
todo.delete('/todos/:id', isExist, deleteTodo);

export default todo;
