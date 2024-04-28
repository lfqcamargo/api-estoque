import { Group } from "../entities/Group";

export interface IGroupService {
    create(groupData: Partial<Group>): Promise<Group>;
    findById(grup_id: number): Promise<Group> | null;
    findAll(): Promise<Group[]>;
    update(grup_id: number, groupData: Partial<Group>): Promise <number>; 
    delete(grup_id: number): Promise <number>;
}