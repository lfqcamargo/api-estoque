import { Request, Response } from "express-serve-static-core";
import { LocationService } from "../services/LocationService";
import { LocationsController } from "./LocationsController";
import { AddressingService } from "../services/AddressingService";

export class LocationController extends LocationsController<LocationService> {
    private addressingService: AddressingService;

    constructor() {
        const locationService   = new LocationService(); 
        const addressingService = new AddressingService();
        super(locationService);        
        this.addressingService = addressingService;
    };

    public async findAddressings(req: Request, res: Response) {
        const locationId    = parseInt(req.params.locationid)
        const sublocationId = parseInt(req.params.sublocationid)

        try {
            const addressings = await this.addressingService.findByLocation(locationId, sublocationId);
            if (addressings != null) {
                return res.status(200).json(addressings);
            } else {
                return res.status(404).json({ message: "Nenhum Registro Encontrado." });
            };
        } catch (erro) {
            return res.status(500).json({ message: `Erro Interno do Servidor.`, error: erro.message });
        };
    };
};
