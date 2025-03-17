// src/controllers/user_controller.ts
import { saveMethod, createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } from '../users/user_service.js';
import express, { Request, Response } from 'express';
//import createToken from '../utils/createToken.js';

export const saveMethodHandler = async (req: Request, res: Response) => {
    try {
        console.log('Datos recibidos:', req.body);
        const data = saveMethod();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await createUser(req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllUsersHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getUserById(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateUser(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteUser(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUserHandler = async (req: Request, res: Response) => {
    try {
        console.log('Datos recibidos:', req.body);
        const data = await loginUser(req.body);
        res.json(data);
        //const token = createToken(data);

        // Devolver el token en la respuesta
        //res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
