import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export interface IUser {
    name: string;
    password: string;
    age: number;
    email: string;
}

const User = mongoose.model('User', userSchema);
export default User;
