import { LocationsServices } from "./LocationsService";
import { Position } from "../entities/Position";
import { PositionRepository } from '../repositories/PositionRepository';

export class PositionService extends LocationsServices<Position> {
    constructor() {
        super(PositionRepository);
    };
};
