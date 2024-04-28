import { FastifyReply, FastifyRequest } from 'fastify';
import { CompanyRepository } from '../../repositories/prisma/CompanyRepositories';
import { RegisterCompanyService } from '../../services/RegisterCompanyService';
import { AppError } from '../../../../shared/errors/AppError';
import { z } from 'zod';

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cnpj: z.string().length(14),
    email: z.string().max(50).email(),
    name: z.string().min(4).max(50),
    nameFantasy: z.string().max(50),
    cellphone: z.string().length(11),
    password: z.string(),
    observation: z.string().max(255)
  });
  const { cnpj, email, name, nameFantasy, cellphone, password, observation } = registerBodySchema.parse(request.body);

  try {
    const companyRepository = new CompanyRepository();
    const registerCompanyService    = new RegisterCompanyService(companyRepository);
    await registerCompanyService.execute({ cnpj, email, name, nameFantasy, cellphone, password, observation });

  } catch (err) {
    if (err instanceof AppError) {
      reply.status(err.statusCode).send({ error: err.message });
    } else {
      return reply.status(500).send({ error: 'Internal Error Server.' });
    }    
  }

  return reply.status(201).send({ cnpj, email, name, nameFantasy, observation });

}

