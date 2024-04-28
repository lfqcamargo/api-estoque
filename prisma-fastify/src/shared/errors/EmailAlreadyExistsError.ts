import { AppError } from './AppError';

export class EmailAlreadyExistsError extends AppError {
  constructor(email: string) {
    super(`E-mail ${email} already exists.`, 400);
  }
}
