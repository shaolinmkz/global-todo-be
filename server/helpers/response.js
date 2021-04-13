/**
 * @function responseConstruct
 * @description reusable response function
 * @param {Object} args - argument
 * @param {Object} args.req - request object
 * @param {Object} args.res - response object
 * @param {Number} args.status - status code
 * @param {Object} args.data - response data
 * @returns {void}
 */
export default ({ req, res, status, data, ...rest }) => {
  res
    .status(status)
    .json({ method: req.method, status, data, ...rest });
};
