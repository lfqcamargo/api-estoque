import { Location } from "../entities/Location"; 

export interface ILocationServices {
    create(dataLocation: Partial<Location>): Promise<Location>;
    findById(id: number): Promise<Location | null>;
    findAll(): Promise<Location[]>;
    update(id: number, updatedData: Partial<Location>): Promise<void>;
    delete(id: number): Promise<void>;
};