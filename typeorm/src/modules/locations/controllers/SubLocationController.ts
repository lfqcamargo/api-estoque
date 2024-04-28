import { SubLocationService } from "../services/SubLocalService";
import { LocationsController } from "./LocationsController";

export class SubLocationController extends LocationsController<SubLocationService> {
    constructor() {
        const subLocationService = new SubLocationService(); 
        super(subLocationService);
    };
};
