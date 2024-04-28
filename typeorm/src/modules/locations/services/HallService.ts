import { LocationsServices } from "./LocationsService";
import { Hall } from "../entities/Hall";
import { HallRepository } from '../repositories/HallRepository';

export class HallService extends LocationsServices<Hall> {
    constructor() {
        super(HallRepository);
    };
};
