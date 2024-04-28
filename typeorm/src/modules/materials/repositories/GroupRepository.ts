import { AppDataSource } from "../../../shared/database";
import { Group } from "../entities/Group";

export const GroupRepository = AppDataSource.getRepository(Group);