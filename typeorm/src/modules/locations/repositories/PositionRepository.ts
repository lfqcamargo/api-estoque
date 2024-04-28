import { AppDataSource } from "../../../shared/database";
import { Position } from "../entities/Position";

export const PositionRepository = AppDataSource.getRepository(Position);