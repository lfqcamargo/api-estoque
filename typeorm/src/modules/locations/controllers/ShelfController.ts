import { ShelfService } from "../services/ShelfService";
import { LocationsController } from "./LocationsController";

export class ShelfController extends LocationsController<ShelfService> {
    constructor() {
        const shelfService = new ShelfService(); 
        super(shelfService);
    };
};
