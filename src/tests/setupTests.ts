import { server } from '@/mocks/server';
import { expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
	server.resetHandlers();
	cleanup();
});

afterAll(() => {
	server.close();
});
