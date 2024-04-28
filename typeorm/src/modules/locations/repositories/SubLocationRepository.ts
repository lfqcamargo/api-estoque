import { AppDataSource } from "../../../shared/database";
import { SubLocation } from "../entities/SubLocation";

export const SubLocationRepository = AppDataSource.getRepository(SubLocation);