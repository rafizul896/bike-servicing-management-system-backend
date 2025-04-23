import { Router } from 'express';
import { ServiceRecordControllers } from './serviceRecord.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceRecordValidations } from './serviceRecord.validation';

const router = Router();

router.post(
  '/',
  validateRequest(ServiceRecordValidations.createServiceRecordSchema),
  ServiceRecordControllers.createServiceRecord,
);

router.get('/', ServiceRecordControllers.getAllServiceRecords);

router.get('/status', ServiceRecordControllers.overdueServices);

router.get('/:serviceId', ServiceRecordControllers.getSpecificServiceRecord);

router.put('/:serviceId/complete', ServiceRecordControllers.MarkAServiceCompleted);

export const ServiceRecordRoutes = router;
