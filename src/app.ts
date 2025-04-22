import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());

// parser
app.use(cookieParser());
app.use(express.json());

// application routes

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Bike servicing management server is running..!',
  });
});


export default app;
