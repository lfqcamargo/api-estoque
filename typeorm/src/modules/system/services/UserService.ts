import { UserRepository } from '../repositories/UserRepository';
import { User } from "../entities/User";
import { IUserService } from "../interfaces/IUserService";

export class UserService implements IUserService {
    private userRepository = UserRepository;

    public async create(userData: Partial<User>): Promise<User> {
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return newUser;
    };

    public async findById(id: number): Promise<User | null> {
        const user = await this.userRepository.findOneBy({ id });
        return user || null;
    };

    public async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    };

    public async update(id: number, updatedData: Partial<User>): Promise<void> {
        await this.userRepository.update(id, updatedData);
    };

    public async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    };
}
