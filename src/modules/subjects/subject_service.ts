import Subject, { ISubject } from './subject_model.js';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save(); //create()
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (name: string) => {
    return await Subject.findOne({ name: name });
};

export const updateSubject = async (name: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ name: name }, { $set: updateData });
};

export const deleteSubject = async (name: string) => {
    return await Subject.deleteOne({ name: name });
};

export const getAlumniBySubject = async (name: string) => {
    const subject = await Subject.findOne({ name: name }).populate('alumni');
    return subject ? subject.alumni : [];
};
