import { AddressingRepository } from "../repositories/AddressingRepository";
import { Addressing } from "../entities/Addressing";

export class AddressingService {
    private addressingRepository = AddressingRepository;

    public async create(addresingsData: Partial<Addressing>): Promise<Addressing> {
        const newAddressing = this.addressingRepository.create(addresingsData);
        await this.addressingRepository.save(newAddressing);
        return newAddressing;
    };

    public async findById(ids: { locationId: number, subLocationId: number, hallId: number, shelfId: number, positionId: number }): Promise<Addressing | null> {
        return await this.addressingRepository.findOne({
            where: ids
        });
    };

    public async findAll(): Promise<Addressing[]> {
        return await this.addressingRepository.find();
    };

    public async update(ids: { locationId: number, subLocationId: number, hallId: number, shelfId: number, positionId: number }, 
                        updatedAddressing: Partial<Addressing>): Promise<number> {
        const result = await this.addressingRepository.update(ids, updatedAddressing);
        return result.affected || 0;
    };
    
    public async delete(ids: { locationId: number, subLocationId: number, hallId: number, shelfId: number, positionId: number }): Promise<number> {
        const result = await this.addressingRepository.delete(ids);
        return result.affected || 0;
    };

    public async findByLocation(locationId: number, sublocationId: number | null): Promise<Addressing[]> | null {
        if (sublocationId != null) {
            const location = await this.addressingRepository.find({
                where: {
                    locationId: locationId,
                    subLocationId: sublocationId
                }
            });
            return location || null;
        } else {
            const location = await this.addressingRepository.find({
                where: { locationId: locationId }
            });
            return location || null;
        };        
    };
};