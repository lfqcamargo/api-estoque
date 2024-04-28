import { InMemoryCompanyRepository } from '../../modules/system/repositories/in-memory/CompanyRepositories';
import { RegisterCompanyService } from '../../modules/system/services/RegisterCompanyService';
import { expect, describe, it } from 'vitest';
import { EmailAlreadyExistsError } from '../errors/EmailAlreadyExistsError';
import { CnpjAlreadyExistsError } from '../errors/CnpjAlreadyExistsError';

describe('Register Company Service', () => {
  it('should be able to register', async () => {
    const companyRepository = new InMemoryCompanyRepository();
    const sut = new RegisterCompanyService(companyRepository);

    const { company } = await sut.execute({
      cnpj: '12345678911234',
      email: 'companytest@gmail.com',
      name: 'Company Test',
      nameFantasy: '',
      observation: ''
    });

    expect(company.id).toEqual(expect.any(String));
  });

  it('should not be possible to register with the same email twice', async () => {
    const companyRepository = new InMemoryCompanyRepository();
    const sut = new RegisterCompanyService(companyRepository);

    const email = 'lfqcamargo@gmail.com';

    await sut.execute({
      cnpj: '12345678911234',
      email: email,
      name: 'Company Test',
      nameFantasy: '',
      observation: ''
    });

    await expect(() => 
      sut.execute({
        cnpj: '12345678911233',
        email: email,
        name: 'Company Test',
        nameFantasy: '',
        observation: ''
      })
    ).rejects.toBeInstanceOf(EmailAlreadyExistsError);
  });

  it('should not be possible to register with the same cnpj twice', async () => {
    const companyRepository = new InMemoryCompanyRepository();
    const sut = new RegisterCompanyService(companyRepository);

    const cnpj = '12345678911234';

    await sut.execute({
      cnpj: cnpj,
      email: 'lfqcamargo@gmail.com',
      name: 'Company Test',
      nameFantasy: '',
      observation: ''
    });

    await expect(() => 
      sut.execute({
        cnpj: cnpj,
        email: 'lfqcamargo@gmail.com.br',
        name: 'Company Test',
        nameFantasy: '',
        observation: ''
      })
    ).rejects.toBeInstanceOf(CnpjAlreadyExistsError);
  });
});

