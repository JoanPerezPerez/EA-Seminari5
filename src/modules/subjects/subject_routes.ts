import express from 'express';
import {
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getAlumniBySubjectHandler
} from '../subjects/subject_controller.js';

const router = express.Router();

router.post('/subjects', createSubjectHandler);
router.get('/subjects', getAllSubjectsHandler);
router.get('/subjects/:name', getSubjectByIdHandler);
router.put('/subjects/:name', updateSubjectHandler);
router.delete('/subjects/:name', deleteSubjectHandler);
router.get('/subjects/alumni/:name', getAlumniBySubjectHandler);

export default router;
