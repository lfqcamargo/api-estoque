import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from "../../system/entities/User";
import { Addressing } from "./Addressing";


@Entity('sles')
export class SubLocation {
    @PrimaryGeneratedColumn({ name: "sles_id" })
    id: number;

    @Column({ name: "sles_dsc" })
    description: string;

    @CreateDateColumn({ name: "sles_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "sles_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "sles_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.subLocations)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Addressing, addressing => addressing.subLocation)
    addressings: Addressing[];
};