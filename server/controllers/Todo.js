import mongoose from "mongoose";
import Todo from "../db/Models/todo";
import responseConstruct from "../helpers/response";

/**
 * @description Handles the todos creation
 * @function createTodo
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @return {void}
 */
const createTodo = async (req, res) => {
  try {
    const { todoText } = req.body;

    const newTodo = new Todo({
      _id: mongoose.Types.ObjectId(),
      userId: "1",
      todoText,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await newTodo.save();

    responseConstruct({
      req,
      res,
      status: 201,
      data: { todo: result, message: "Todo created successfully" },
    });
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

/**
 * @description Fetches all todos
 * @function fetchTodos
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @return {void}
 */
const fetchTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    responseConstruct({
      req,
      res,
      status: 200,
      data: {
        todos: todos?.reverse?.() || [],
        message: "Todos fetched successfully",
      },
    });
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

/**
 * @description Fetches a single
 * @function fetchSingleTodo
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @return {void}
 */
const fetchSingleTodo = async (req, res) => {
  try {
    responseConstruct({
      req,
      res,
      status: 200,
      data: { todo: req.prevTodo, message: "Fetched todo successfully" },
    });
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

/**
 * @description Handles todo update
 * @function updateTodo
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @return {void}
 */
const updateTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const { setValues } = req;

    await Todo.findOneAndUpdate(
      { _id: todoId },
      {
        $set: { ...setValues, updatedAt: new Date() },
      },
      { upsert: true }
    );

    const todo = await Todo.findById(todoId);

    responseConstruct({
      req,
      res,
      status: 200,
      data: { todo, message: "Todo updated successfully" },
    });
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

/**
 * @description Handles todo deletion
 * @function deleteTodo
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @return {void}
 */
const deleteTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    await Todo.deleteOne({ _id: todoId });

    responseConstruct({
      req,
      res,
      status: 200,
      data: { message: "Todo deleted successfully" },
    });
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

export { createTodo, fetchTodos, fetchSingleTodo, updateTodo, deleteTodo };
