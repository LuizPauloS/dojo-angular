const api = 'http://localhost:3000';

export const environment = {
  production: false,
  heroes: {
    save: api + '/heroes', // POST
    findAll: api + '/heroes' // GET
  }
};

