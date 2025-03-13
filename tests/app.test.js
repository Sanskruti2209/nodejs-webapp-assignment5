const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is Assignment 5!');
});

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, this is Assignment 5!');
  });
});