import { User } from "../entities/User";

export interface IUserService {
    create(dadosUsuario: Partial<User>): Promise<User>;
    findById(user_id: number): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user_id: number, dadosAtualizacao: Partial<User>): Promise<void>;
    delete(user_id: number): Promise<void>;
};