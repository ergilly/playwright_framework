import { test, expect } from '../fixtures';
import { userApiData } from '../../data/api/userApiData';

test.describe('Users API', () => {
  test('should return 200 for GET /users', async ({ apiContext }) => {
    const response = await apiContext.get('/users');

    expect(response.status()).toBe(200);
  });

  test('should create a new user via POST /users', async ({ apiContext }) => {
    const response = await apiContext.post('/users', {
      data: userApiData.newUser,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toMatchObject({ name: userApiData.newUser.name });
  });

  test('should return 404 for non-existent user', async ({ apiContext }) => {
    const response = await apiContext.get('/users/nonexistent-id-00000');

    expect(response.status()).toBe(404);
  });
});
