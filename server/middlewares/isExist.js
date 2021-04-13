import Todo from "../db/Models/todo";
import responseConstruct from "../helpers/response";

/**
 * @description Checks if a todo exist
 * @function isExist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param  {function} next - Function that when invoked, proceeds to the next middleware on the route.
 * @return {void}
 */
const isExist = async (req, res, next) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findById(todoId);

    if (todo) {
      req.prevTodo = todo;
      next();
    } else {
      responseConstruct({
        req,
        res,
        status: 404,
        data: { message: "Todo doesn't exist or have been deleted" },
      });
    }
  } catch (error) {
    responseConstruct({
      req,
      res,
      status: 500,
      data: { message: error.message, error },
    });
  }
};

export default isExist;
