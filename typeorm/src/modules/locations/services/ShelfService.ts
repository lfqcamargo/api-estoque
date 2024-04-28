import { LocationsServices } from "./LocationsService";
import { Shelf } from "../entities/Shelf";
import { ShelfRepository } from '../repositories/ShelfRepository';

export class ShelfService extends LocationsServices<Shelf> {
    constructor() {
        super(ShelfRepository);
    };
};
