import { EmailAlreadyExistsError } from '../../../shared/errors/EmailAlreadyExistsError';
import { User } from '@prisma/client';
import { IUserRepository } from '../interfaces/IUserRepository';

interface IUserRegisterServiceResponse {
  user: User
}

interface IUserRegisterServiceRequest {
  cpf: string,
  email: string,
  name: string,
  cellphone: number,
  password_hash: string
}

export class RegisterUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ cpf, email, name, cellphone, password_hash }: IUserRegisterServiceRequest): Promise<IUserRegisterServiceResponse> {

    const UserEmail = await this.userRepository.findByEmail(email);
    if (UserEmail) {
      throw new EmailAlreadyExistsError(email);
    }

    const user = await this.userRepository.create({ cpf, email, name, cellphone, password_hash });
    return {user};
  }
}
