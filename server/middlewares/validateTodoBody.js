import responseConstruct from "../helpers/response";

/**
 * @description Validates the request body
 * @function validateRequestBody
 * @param  {Object} body - request body
 * @return {Promise}
 */
const validateRequestBody = ({ todoText, completed }) =>
  new Promise((resolve, reject) => {
    const errors = [];
    let field;

    if (completed === undefined || completed === null) {
      errors.push("completed is required");
      field = "completed";
    }

    if ([todoText === undefined, todoText === null, !`${todoText}`.replace(/\s+/gm, "")].includes(true)) {
      errors.push("todoText is required");
      field = "todoText";
    }

    if (errors.length > 1) {
      reject(errors);
    } else {
      resolve(field);
    }
  });

/**
 * @description Handles the todo validation middleware
 * @function validateTodo
 * @param  {object} req - request object
 * @param {object} res - response object.
 * @param  {function} next - Function that when invoked, proceeds to the next middleware on the route.
 * @return {void}
 */
export default (req, res, next) => {
  const { completed, todoText } = req.body;

  validateRequestBody({
    completed,
    todoText,
  })
    .then((field) => {
      const setValues = {
        completed,
        todoText,
      };

      if (field) {
        delete setValues[field];
      }

      req.setValues = setValues;
      next();
    })
    .catch((errors) => {
      responseConstruct({
        req,
        res,
        status: 400,
        data: {
          errors,
          message: "one of these (todoText or completed) must be provided",
        },
      });
    });
};
