import { AppError } from './AppError';

export class CnpjAlreadyExistsError extends AppError {
  constructor(cnpj: string) {
    super(`CNPJ ${cnpj} already exists.`, 400);
  }
}
