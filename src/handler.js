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

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };