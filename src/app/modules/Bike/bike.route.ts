import { Router } from 'express';
import { BikeControllers } from './bike.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BikeValidation } from './bike.validation';

const router = Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeSchema),
  BikeControllers.createBike,
);

router.get('/', BikeControllers.getAllBikes);
router.get('/:bikeId', BikeControllers.getSpecificBike);

export const BikeRoutes = router;
