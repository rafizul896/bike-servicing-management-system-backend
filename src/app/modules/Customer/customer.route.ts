import { Router } from 'express';
import { CustomerControllers } from './coutomer.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CustomerValidation } from './customer.validation';

const router = Router();

router.post(
  '/',
  validateRequest(CustomerValidation.createCutomerSchema),
  CustomerControllers.createCutomer,
);
router.get('/', CustomerControllers.getAllCustomers);

router.get('/:customerId', CustomerControllers.getSpecificCustomer);

router.put(
  '/:customerId',
  validateRequest(CustomerValidation.updateCustomerSchema),
  CustomerControllers.updateCustomerDetails,
);

router.delete('/:customerId', CustomerControllers.deleteCustomerFromDB);

export const CustomerRoutes = router;
