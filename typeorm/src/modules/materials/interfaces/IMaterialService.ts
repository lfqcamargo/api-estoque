import { Material } from "../entities/Material";

export interface IMaterialService {
    create(MaterialData: Partial<Material>): Promise<Material>;
    findById(grup_id: number): Promise<Material> | null;
    findAll(): Promise<Material[]>;
    update(grup_id: number, MaterialData: Partial<Material>): Promise <number>; 
    delete(grup_id: number): Promise <number>;
}