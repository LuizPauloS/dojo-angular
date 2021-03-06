const api = 'http://localhost:3000';

export const environment = {
  production: false,
  heroes: {
    save: api + '/heroes', // POST
    findAll: api + '/heroes', // GET
    findById: api + '/heroes', // GET
    delete: api + '/heroes', // DELETE
    update: api + '/heroes' // PUT
  }
};

