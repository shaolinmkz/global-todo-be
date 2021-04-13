import express from 'express';
import todo from "./todo";

const rootRouter = express.Router();

rootRouter.use(todo);

export default rootRouter;
