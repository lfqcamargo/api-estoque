import { Company, Prisma } from '@prisma/client';
import { ICompanyRepository } from '../../interfaces/ICompanyRepository';
import { randomUUID } from 'crypto';

export class InMemoryCompanyRepository implements ICompanyRepository {
  public items: Company[] = [];

  async create(data: Prisma.CompanyCreateInput) {  
    const company = {
      id: randomUUID(),
      cnpj: data.cnpj,
      email: data.email,
      name: data.name,
      nameFantasy: data.nameFantasy ?? null,
      observation: data.observation ?? null,
      createdAt: new Date()
    };

    this.items.push(company);

    return company;
  }

  async findByEmail(email: string) {
    const company = this.items.find(item => item.email == email);

    if (!company) {
      return null;
    } else {
      return company;
    }    
  }

  async findByCNPJ(cnpj: string) {
    const company = this.items.find(item => item.cnpj == cnpj);

    if (!company) {
      return null;
    } else {
      return company;
    }
  }
}
