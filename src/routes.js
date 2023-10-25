/* eslint-disable eol-last */

const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;