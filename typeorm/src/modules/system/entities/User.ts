import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Group } from "../../materials/entities/Group";
import { Material } from "../../materials/entities/Material";
import { Location } from "../../locations/entities/Location";
import { SubLocation } from "../../locations/entities/SubLocation";
import { Hall } from "../../locations/entities/Hall";
import { Shelf } from "../../locations/entities/Shelf";
import { Position } from "../../locations/entities/Position";
import { Addressing } from "../../locations/entities/Addressing";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn({ name: "user_id" })
    id: number;

    @Column({ name: "user_nom" })
    name: string;

    @Column({ name: "user_cpf" })
    cpf: string;

    @Column({ name: "user_dsc_email" })
    email: string;
    
    @Column({ name: "user_has_senha" })
    password: string;

    @CreateDateColumn({ name: "user_dat_cria", type: "datetime"})
    dateCreated: Date;

    @UpdateDateColumn({ name: "user_dat_atua", type: "datetime"})
    lastChangeDate: Date;

    @Column({ name: "user_ind_ativo" })
    active: boolean;

    @Column({ name: "user_dat_login", nullable:true })
    lastLogin: Date;

    @OneToMany(() => Group, group => group.user)
    groups: Group[];

    @OneToMany(() => Material, material => material.user)
    materials: Material[];

    @OneToMany(() => Location, location => location.user)
    locations: Location[];

    @OneToMany(() => SubLocation, subLocation => subLocation.user)
    subLocations: SubLocation[];

    @OneToMany(() => Hall, hall => hall.user)
    halls: Hall[];

    @OneToMany(() => Shelf, shelf => shelf.user)
    shelfs: Shelf[];

    @OneToMany(() => Position, position => position.user)
    positions: Position[];

    @OneToMany(() => Addressing, addressing => addressing.user)
    addressings: Addressing[];

};