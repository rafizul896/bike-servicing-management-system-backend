import { Router } from 'express';
import { CustomerControllers } from './coutomer.controller';

const router = Router();

router.post('/', CustomerControllers.createCutomer);
router.get('/', CustomerControllers.getAllCustomers);
router.get('/:customerId', CustomerControllers.getSpecificCustomer);
router.put('/:customerId', CustomerControllers.updateCustomerDetails);
router.delete('/:customerId', CustomerControllers.deleteCustomerFromDB);

export const CustomerRoutes = router;
