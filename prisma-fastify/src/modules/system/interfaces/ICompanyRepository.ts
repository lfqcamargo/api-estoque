import { Prisma, Company } from '@prisma/client';

export interface ICompanyRepository {
  create(data: Prisma.CompanyCreateInput): Promise<Company | undefined>
  findByEmail(email: string): Promise<Company | null>
  findByCNPJ(cnpj: string): Promise<Company | null>
}


