import { AppDataSource } from "../../../shared/database";
import { Material } from "../entities/Material";

export const MaterialRepository = AppDataSource.getRepository(Material);