import { HallService } from "../services/HallService";
import { LocationsController } from "./LocationsController";

export class HallController extends LocationsController<HallService> {
    constructor() {
        const hallService = new HallService(); 
        super(hallService);
    };
};
