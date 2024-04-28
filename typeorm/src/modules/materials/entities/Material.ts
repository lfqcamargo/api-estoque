import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../system/entities/User";
import { Group } from "./Group";


@Entity('mate')
export class Material {
    @PrimaryGeneratedColumn({ name: "mate_id" })
    id: number;

    @Column({ name: "mate_dsc" })
    description: string;

    @CreateDateColumn({ name: "mate_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "mate_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "mate_obs", nullable:true })
    observation: string

    @ManyToOne(() => Group, group => group.materials)
    @JoinColumn({ name: 'grup_id' })
    grup: Group;

    @ManyToOne(() => User, user => user.materials)
    @JoinColumn({ name: 'user_id' })
    user: User;

    
};