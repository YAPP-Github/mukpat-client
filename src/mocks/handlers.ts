// mock
import { rest } from 'msw';
import { db } from '@/mocks/data';

const handlers = [
	rest.get('http://localhost:5000/posts', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(db.posts));
	}),
];

export { handlers };
