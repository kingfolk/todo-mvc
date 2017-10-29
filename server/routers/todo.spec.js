const { expect } = require('chai');
const app = require('../index');
const request = require('supertest').agent(app.listen());

describe('Todos', () => {
  describe('GET /todos', () => {
    it('should get empty list initally', async () => {
      const { body: todos } = await request
        .get('/todos')
        .set({ Accept: 'application/json' })
        .expect(200)
        .expect('Content-Type', /json/);

      expect(todos).to.eql([]);
    });
  });

  describe('POST /todos', () => {
    it('should create todo', async () => {
      await request
        .post('/todos')
        .send({ name: 'new todo' })
        .expect(201);
    });
  });

  describe('PUT /todos/:id', () => {
    it('should edit todo', async () => {
      await request
        .put('/todos/1')
        .send({ name: 'edit todo' })
        .expect(200);
    });
  });

  describe('DELETE /todos/:id', () => {
    it('should delete todo', async () => {
      await request
        .delete('/todos/1')
        .expect(200);
    });
  });
});
