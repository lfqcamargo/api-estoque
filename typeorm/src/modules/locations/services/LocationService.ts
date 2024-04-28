import { LocationsServices } from "./LocationsService";
import { Location } from "../entities/Location";
import { LocationRepository } from '../repositories/LocationRepository';

export class LocationService extends LocationsServices<Location> {
    constructor() {
        super(LocationRepository);
    };
};
