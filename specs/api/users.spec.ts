import { test, expect } from '../fixtures';
import { APIRequestContext } from '@playwright/test';
import commonHeaders from '../../data/api/request/headers/common.headers.json';
import forceErrorHeaders from '../../data/api/request/headers/forceError.headers.json';
import createUsersBody from '../../data/api/request/body/createUsers.body.json';
import createUsersBody400 from '../../data/api/request/body/createUsers400.body.json';
import editUserBody from '../../data/api/request/body/editUser.body.json';
import statusCodes from '../../data/api/response/body/statusCodes.json';

const buildCreateUserBody = () => {
  const uniqueId = Date.now();
  return {
    ...createUsersBody,
    name: `${createUsersBody.name} ${uniqueId}`,
    email: `alice.${uniqueId}@example.com`,
  };
};

const createUser = async ({
  apiContext,
}: {
  apiContext: APIRequestContext;
}) => {
  const response = await apiContext.post('/users', {
    headers: commonHeaders,
    data: buildCreateUserBody(),
  });

  expect(response.status()).toBe(statusCodes.CREATED);
  const responseBody = await response.json();
  return responseBody.body.user.id as number;
};

test.describe('Users API', () => {
  test('Health: should return 200 for GET /health', async ({ apiContext }) => {
    const response = await apiContext.get('/health', {
      headers: {},
    });

    expect(response.status()).toBe(statusCodes.OK);
  });

  test('Missing Route 404: should return 404 for GET /hello', async ({ apiContext }) => {
    const response = await apiContext.get('/hello', {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.NOT_FOUND);
  });

  test('Users: should return 200 for GET /users', async ({ apiContext }) => {
    const response = await apiContext.get('/users', {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.OK);
  });

  test('Users 401 Unauthorised: should return 401 for GET /Users without auth', async ({ apiContext }) => {
    const response = await apiContext.get('/Users', {
      headers: {},
    });

    expect(response.status()).toBe(statusCodes.UNAUTHORIZED);
  });

  test('Users 500: should return 500 for GET /users with force error header', async ({ apiContext }) => {
    const response = await apiContext.get('/users', {
      headers: forceErrorHeaders,
    });

    expect(response.status()).toBe(statusCodes.INTERNAL_SERVER_ERROR);
  });

  test('Create Users: should return 201 for POST /users', async ({ apiContext }) => {
    const response = await apiContext.post('/users', {
      headers: commonHeaders,
      data: buildCreateUserBody(),
    });

    expect(response.status()).toBe(statusCodes.CREATED);
  });

  test('Create Users 400: should return 400 for POST /users with invalid body', async ({ apiContext }) => {
    const response = await apiContext.post('/users', {
      headers: commonHeaders,
      data: createUsersBody400,
    });

    expect(response.status()).toBe(statusCodes.BAD_REQUEST);
  });

  test('Create Users 500: should return 500 for POST /users with force error header', async ({ apiContext }) => {
    const response = await apiContext.post('/users', {
      headers: forceErrorHeaders,
      data: createUsersBody,
    });

    expect(response.status()).toBe(statusCodes.INTERNAL_SERVER_ERROR);
  });

  test('Users by ID: should return 200 for GET /users/:id', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.get(`/users/${id}`, {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.OK);
  });

  test('Users by ID 404: should return 404 for GET /users/999', async ({ apiContext }) => {
    const response = await apiContext.get('/users/999', {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.NOT_FOUND);
  });

  test('Users by ID 500: should return 500 for GET /users/:id with force error header', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.get(`/users/${id}`, {
      headers: forceErrorHeaders,
    });

    expect(response.status()).toBe(statusCodes.INTERNAL_SERVER_ERROR);
  });

  test('Edit User: should return 200 for PUT /users/:id', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.put(`/users/${id}`, {
      headers: commonHeaders,
      data: editUserBody,
    });

    expect(response.status()).toBe(statusCodes.OK);
  });

  test('Edit User 404: should return 404 for PUT /users/999', async ({ apiContext }) => {
    const response = await apiContext.put('/users/999', {
      headers: commonHeaders,
      data: editUserBody,
    });

    expect(response.status()).toBe(statusCodes.NOT_FOUND);
  });

  test('Edit User 500: should return 500 for PUT /users/:id with force error header', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.put(`/users/${id}`, {
      headers: forceErrorHeaders,
      data: editUserBody,
    });

    expect(response.status()).toBe(statusCodes.INTERNAL_SERVER_ERROR);
  });

  test('Delete User: should return 200 for DELETE /users/:id', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.delete(`/users/${id}`, {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.OK);
  });

  test('Delete User 404: should return 404 for DELETE /users/999', async ({ apiContext }) => {
    const response = await apiContext.delete('/users/999', {
      headers: commonHeaders,
    });

    expect(response.status()).toBe(statusCodes.NOT_FOUND);
  });

  test('Delete User 500: should return 500 for DELETE /users/:id with force error header', async ({ apiContext }) => {
    const id = await createUser({ apiContext });
    const response = await apiContext.delete(`/users/${id}`, {
      headers: forceErrorHeaders,
    });

    expect(response.status()).toBe(statusCodes.INTERNAL_SERVER_ERROR);
  });
});
