import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import mongoose from './database';

dotenv.config();

// setup Mongoose
mongoose.config();

// Set up the express app
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming requests
app.use(express.urlencoded());
app.use(express.json());

// Routes
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({
    method: req.method,
    data: {
      message: 'Welcome to todo saga'
    }
  })
});

app.use((req, res) => {
  res.status(404).json({
    method: req.method,
    data: { message: 'Oops! this route has no juice' }
  })
});


export default app;
