import { Prisma, PrismaClient } from '@prisma/client';
import { IUserRepository } from '../../interfaces/IUserRepository';

export class UserRepository implements IUserRepository {
  prisma = new PrismaClient();

  async create(data: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({ data });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: {email} });
    return user;
  }
}

