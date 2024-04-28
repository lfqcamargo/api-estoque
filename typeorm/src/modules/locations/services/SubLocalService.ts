import { LocationsServices } from "./LocationsService";
import { SubLocation } from "../entities/SubLocation";
import { SubLocationRepository } from '../repositories/SubLocationRepository';

export class SubLocationService extends LocationsServices<SubLocation> {
    constructor() {
        super(SubLocationRepository);
    };
};
