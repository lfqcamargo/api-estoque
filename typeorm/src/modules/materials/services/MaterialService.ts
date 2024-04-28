import { MaterialRepository } from "../repositories/MaterialRepository";
import { Material } from "../entities/Material";
import { IMaterialService } from "../interfaces/IMaterialService";

export class MaterialService implements IMaterialService {
    private materialRepository = MaterialRepository;

    public async create(materialData: Partial<Material>): Promise<Material> {

        const newMaterial = this.materialRepository.create(materialData);
        console.log(newMaterial)
        await this.materialRepository.save(newMaterial);
        
        return newMaterial;
    };

    public async findById(id): Promise<Material> {
        const material = await this.materialRepository.findOneBy(id);
        return material;
    };

    public async findAll(): Promise<Material[]> {
        const listMaterials = await this.materialRepository.find();
        return listMaterials;
    };

    public async update(id: number, MaterialData: Partial<Material>): Promise <number> {
        const result = await this.materialRepository.update(id, MaterialData);
        return result.affected || 0;
    };

    public async delete(id: number): Promise <number> {
        const result = await this.materialRepository.delete(id);
        return result.affected || 0;
    };

};