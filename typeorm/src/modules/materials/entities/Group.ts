import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../system/entities/User";
import { Material } from "./Material";


@Entity('grup')
export class Group {
    @PrimaryGeneratedColumn({ name: "grup_id" })
    id: number;

    @Column({ name: "grup_dsc" })
    description: string;

    @CreateDateColumn({ name: "grup_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "grup_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "grup_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.groups)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Material, material => material.grup)
    materials: Material[];
};