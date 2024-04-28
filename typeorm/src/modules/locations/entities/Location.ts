import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from "../../system/entities/User";
import { Addressing } from "./Addressing";


@Entity('loes')
export class Location {
    @PrimaryGeneratedColumn({ name: "loes_id" })
    id: number;

    @Column({ name: "loes_dsc" })
    description: string;

    @CreateDateColumn({ name: "loes_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "loes_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "loes_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.locations)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Addressing, addressing => addressing.location)
    addressings: Addressing[];
};