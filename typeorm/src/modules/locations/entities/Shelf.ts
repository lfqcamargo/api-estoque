import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from "../../system/entities/User";
import { Addressing } from "./Addressing";


@Entity('pres')
export class Shelf {
    @PrimaryGeneratedColumn({ name: "pres_id" })
    id: number;

    @Column({ name: "pres_dsc" })
    description: string;

    @CreateDateColumn({ name: "pres_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "pres_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "pres_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.shelfs)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Addressing, addressing => addressing.shelf)
    addressings: Addressing[];
};