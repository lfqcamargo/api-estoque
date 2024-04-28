import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from "../../system/entities/User";
import { Addressing } from "./Addressing";


@Entity('poes')
export class Position {
    @PrimaryGeneratedColumn({ name: "poes_id" })
    id: number;

    @Column({ name: "poes_dsc" })
    description: string;

    @CreateDateColumn({ name: "poes_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "poes_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "poes_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.positions)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Addressing, addressing => addressing.position)
    addressings: Addressing[];
};