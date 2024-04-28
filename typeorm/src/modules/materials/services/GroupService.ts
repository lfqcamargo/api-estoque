import { GroupRepository } from "../repositories/GroupRepository";
import { Group } from "../entities/Group";
import { IGroupService } from "../interfaces/IGroupService";

export class GroupService implements IGroupService {
    private groupRepository = GroupRepository;

    public async create(groupData: Partial<Group>): Promise<Group> {

        const newGroup = this.groupRepository.create(groupData);
        console.log(newGroup)
        await this.groupRepository.save(newGroup);
        
        return newGroup;
    };

    public async findById(grup_id): Promise<Group> {
        const group = await this.groupRepository.findOneBy(grup_id);
        return group;
    };

    public async findAll(): Promise<Group[]> {
        const listGroups = await this.groupRepository.find();
        return listGroups;
    };

    public async update(grup_id: number, groupData: Partial<Group>): Promise <number> {
        const result = await this.groupRepository.update(grup_id, groupData);
        return result.affected || 0;
    };

    public async delete(grup_id: number): Promise <number> {
        const result = await this.groupRepository.delete(grup_id);
        return result.affected || 0;
    };

};