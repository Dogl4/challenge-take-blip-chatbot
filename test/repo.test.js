const request = require('supertest');
const app = require('../src/app');
const axios = require('axios');
const { mockDataApi } = require('./mock');

describe('GET /', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue(mockDataApi);
  });

  afterEach(() => jest.clearAllMocks());

  describe('when the request is valid', () => {
    it('should return a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });

    it('should return a JSON response', async () => {
      const response = await request(app).get('/');
      expect(response.type).toBe('application/json');
    });

    it('should return a list of 5 repos', async () => {
      const response = await request(app).get('/');
      expect(Object.keys(response.body).length).toBe(5);
    });

    it('should return a list of repos with the correct properties', async () => {
      const response = await request(app).get('/');
      expect(response.body[0]).toHaveProperty('image');
      expect(response.body[0]).toHaveProperty('full_name');
      expect(response.body[0]).toHaveProperty('description');
      expect(response.body[0]).toHaveProperty('language');
      expect(response.body[0]).toHaveProperty('created_at');
    });
  });

  describe('when the request is invalid', () => {
    beforeEach(() => {
      axios.get = jest.fn().mockRejectedValue(new Error());
    });

    afterEach(() => jest.clearAllMocks());

    it('should return a 500 status code', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(500);
    });
  });
});
