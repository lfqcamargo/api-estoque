import { Repository, FindOptionsWhere } from 'typeorm';

interface IWithId {
    id: number;
}

export class LocationsServices<T extends IWithId> {
    private repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    public async create(dataLocation) {
        const newLocation = this.repository.create(dataLocation);
        await this.repository.save(newLocation);
        return newLocation;
    };

    public async findById(id: number) {
        const numberId = Number(id); 
        const location = await this.repository.findOneBy({ id: numberId as any } as FindOptionsWhere<T>);
        return location || null;
    };    

    public async findAll() {
        return await this.repository.find();
    };

    public async update(id: number, updatedData) {
        return await this.repository.update(id, updatedData);
    };

    public async delete(id: number) {
        return await this.repository.delete(id);
    };

};