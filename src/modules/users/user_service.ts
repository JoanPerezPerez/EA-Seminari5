// src/services/user_service.ts
import bcrypt from 'bcryptjs';
import User, { IUser } from '../users/user_models.js';

export const saveMethod = () => {
    return 'Hola';
};
export const createUser = async (userData: IUser) => {
    console.log('Datos recibidos en createUser:', userData); // Depuración

    if (typeof userData.password !== 'string') {
        throw new Error('La contraseña debe ser una cadena de texto');
    }

    // Hashear la contraseña antes de guardarla
    userData.password = bcrypt.hashSync(userData.password, 12);
    console.log('Contraseña hasheada:', userData.password); // Depuración

    // Crear y guardar el usuario
    const user = new User(userData);
    const savedUser = await user.save();
    console.log('Usuario guardado:', savedUser); // Depuración

    return savedUser;
};

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
    return await User.updateOne({ _id: id }, { $set: updateData });
};

export const deleteUser = async (id: string) => {
    return await User.deleteOne({ _id: id });
};

export const loginUser = async (userData: Partial<IUser>) => {
    console.log('Datos recibidos en loginUser:', userData); // Depuración

    if (!userData.email || !userData.password) {
        throw new Error('Email y contraseña son obligatorios');
    }

    const user = await User.findOne({ email: userData.email });
    if (!user) {
        throw new Error('Usuario/contraseña no encontrado');
    }

    console.log('Contraseña del usuario en la base de datos:', user.password); // Depuración

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Usuario/contraseña no encontrado');
    }

    return user;
};
