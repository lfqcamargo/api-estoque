import { PositionService } from "../services/PositionSerivce";
import { LocationsController } from "./LocationsController";

export class PositionController extends LocationsController<PositionService> {
    constructor() {
        const positionService = new PositionService(); 
        super(positionService);
    };
};
