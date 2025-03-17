import { Request, Response } from 'express';
import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getAlumniBySubject } from '../subjects/subject_service.js';

export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await createSubject(req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.name);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.name, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.name);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAlumniBySubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAlumniBySubject(req.params.name);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
