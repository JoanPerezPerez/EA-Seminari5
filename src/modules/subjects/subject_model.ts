import { Schema, Types, model } from 'mongoose';
//import { User } from '../users/user_models.js';

export interface ISubject {
    name: string;
    teacher: Types.ObjectId;
    alumni: Types.ObjectId[];
}

const subjectSchema = new Schema<ISubject>({
    name: {
        type: String,
        required: true,
        immutable: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    alumni: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: [] // Por defecto, sin alumnos
        }
    ]
});

const Subject = model<ISubject>('subject', subjectSchema);
export default Subject;
