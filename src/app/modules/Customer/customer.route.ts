import { Router } from 'express';
import { CustomerControllers } from './coutomer.controller';

const router = Router();

router.post('/', CustomerControllers.createCutomer);

export const CustomerRoutes = router;
