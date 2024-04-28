import { AppDataSource } from "../../../shared/database";
import { Hall } from "../entities/Hall";

export const HallRepository = AppDataSource.getRepository(Hall);