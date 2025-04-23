import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { CustomerRoutes } from './app/modules/Customer/customer.route';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { BikeRoutes } from './app/modules/Bike/bike.route';
import { ServiceRecordRoutes } from './app/modules/ServiceRecord/serviceRecord.route';

const app: Application = express();
app.use(cors());

// parser
app.use(cookieParser());
app.use(express.json());

// application routes
app.use('/api/customers', CustomerRoutes);
app.use('/api/bikes', BikeRoutes);
app.use('/api/services', ServiceRecordRoutes);

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Bike servicing management server is running..!',
  });
});

// for global error
app.use(globalErrorHandler);

// for not found route
app.use(notFound);

export default app;
