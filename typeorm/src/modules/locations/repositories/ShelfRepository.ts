import { AppDataSource } from "../../../shared/database";
import { Shelf } from "../entities/Shelf";

export const ShelfRepository = AppDataSource.getRepository(Shelf);