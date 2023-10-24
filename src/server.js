/* eslint-disable eol-last */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
console.log('Server is running!');

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server is running on Port: ${server.info.uri}`);
};

init();