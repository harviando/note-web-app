/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
/* eslint-disable eol-last */

const { nanoid } = require('nanoid');
const notes = require('./notes');

/* eslint-disable no-unused-vars */
const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    if (body.length < 5) {
        const response = request.response({
            status: 'fail',
            message: 'The body is too short, try adding 5 or more characters into it!',
        });

        response.code(400);
        return response;
    }

    if (body.includes('aezakmi')) {
        const id = nanoid(6);
        const secretNote = {
            title: 'You have spawned a secret note.',
            tags: ['this', 'is', 'secret'],
            body: 'This is the content of the super duper secret notes.',
            id,
            createdAt,
            updatedAt,
        };

        notes.push(secretNote);
    }

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'New note is successfuly added!',
            data: {
                noteId: id,
            },
        });

        response.code(201);
        return response;
    }

    const response = request.response({
        status: 'fail',
        message: 'Failed to add new note!',
    });

    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Notes not found.',
    });

    response.code(404);
    return response;
};

const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes[index] = {
            ...notes[index], // need this code to handle all the notes properties that not required changes
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Success to edit the note!',
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Failed to edit the note!',
    });
    response.code(400);
    return response;
};

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);

        const response = h.response({
            status: 'success',
            message: 'Success delete a note!',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Failed to delete a note!',
    });
    response.code(400);
    return response;
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};