import { Prisma, PrismaClient } from '@prisma/client';
import { ICompanyRepository } from '../../interfaces/ICompanyRepository';

export class CompanyRepository implements ICompanyRepository {
  prisma = new PrismaClient();

  async create(dataCompany: Prisma.CompanyCreateInput, dataUser: Prisma.UserCreateInput) {
    let company;
    let user;
    await this.prisma.$transaction(async (trx) => {
      company = await trx.company.create({ dataCompany });
      user = await.trx.company.create({ dataUser });
    });
    
    return company;
  }

  async findByEmail(email: string) {
    const company = await this.prisma.company.findUnique({ where: {email} });
    return company;
  }

  async findByCNPJ(cnpj: string) {
    const company = await this.prisma.company.findUnique({ where: {cnpj} });
    return company;
  }
}
