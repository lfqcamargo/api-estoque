import { FastifyInstance } from 'fastify';
import { register } from '../controllers/RegisterCompanyController';

export async function appRoutes(app: FastifyInstance) {
  app.post('/company', register);
}
