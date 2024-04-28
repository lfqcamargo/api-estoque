import { AppDataSource } from "../../../shared/database";
import { Location } from "../entities/Location";

export const LocationRepository = AppDataSource.getRepository(Location);