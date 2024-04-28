import { EmailAlreadyExistsError } from '../../../shared/errors/EmailAlreadyExistsError';
import { CnpjAlreadyExistsError } from '../../../shared/errors/CnpjAlreadyExistsError';
import { Company } from '@prisma/client';
import { ICompanyRepository } from '../interfaces/ICompanyRepository';

interface ICompanyRegisterServiceResponse {
  company: Company
}

interface ICompanyRegisterServiceRequest {
  cnpj: string,
  email: string,
  name: string,
  nameFantasy: string | null,
  cellphone: string,
  password: string,
  observation: string | null
}

export class RegisterCompanyService {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({ cnpj, email, name, nameFantasy, observation }: ICompanyRegisterServiceRequest): Promise<ICompanyRegisterServiceResponse> {

    const companyEmail = await this.companyRepository.findByEmail(email);
    if (companyEmail) {
      throw new EmailAlreadyExistsError(email);
    }

    const companyCnpj = await this.companyRepository.findByCNPJ(cnpj);
    if (companyCnpj) {
      throw new CnpjAlreadyExistsError(cnpj);
    }

    const company =  await this.companyRepository.create({ cnpj, email, name, nameFantasy, observation });

    return {company};
  }
}
