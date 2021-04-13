import responseConstruct from "../helpers/response";

/**
 * @description Validates the todo text
 * @function validateTodoText
 * @param  {string} todoText - todo text
 * @return {Promise}
 */
const validateTodoText = (todoText) => new Promise((resolve, reject) => {
    const field = "todoText";

    const errors = [];

    if (!todoText) {
      errors.push(`${field} is required`);
    }

    if (typeof todoText !== "string") {
      errors.push(`${field} must be a string`);
    }

    if (errors.length) {
      reject(errors);
    } else {
      resolve(errors);
    }
  });


/**
 * @description Handles the todo text validation
 * @function validateTodoText
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @param  {function} next - Function that when invoked, proceeds to the next middleware on the route.
 * @return {void}
 */
export default (req, res, next) => {

  const { todoText } = req.body;


  validateTodoText(todoText)
    .then(() => {
      next();
    })
    .catch((errors) => {
      responseConstruct({
        req,
        res,
        status: 400,
        data: {
          errors,
        },
      });
    });
};
