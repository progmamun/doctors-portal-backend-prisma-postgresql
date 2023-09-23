import express from 'express';
import { medicalProfileController } from './medicalProfiles.controller';

const router = express.Router();

router.post('/create-medical-profile', medicalProfileController.createMedicalProfile);
router.get('/', medicalProfileController.getAllMedicalProfiles);
router.get('/:id', medicalProfileController.getSingleMedicalProfile);
router.patch('/:id', medicalProfileController.updateMedicalProfile);
router.delete('/:id', medicalProfileController.deleteMedicalProfile);

export const medicalProfileRoutes = router;
