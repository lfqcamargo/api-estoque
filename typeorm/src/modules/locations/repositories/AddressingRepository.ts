import { AppDataSource } from "../../../shared/database";
import { Addressing } from "../entities/Addressing";

export const AddressingRepository = AppDataSource.getRepository(Addressing);