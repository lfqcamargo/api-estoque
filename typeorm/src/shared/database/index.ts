import { DataSource } from "typeorm";
import { User } from "../../modules/system/entities/User";
import { Group } from "../../modules/materials/entities/Group";
import { Location } from "../../modules/locations/entities/Location";
import { SubLocation } from "../../modules/locations/entities/SubLocation";
import { Hall } from "../../modules/locations/entities/Hall";
import { Shelf } from "../../modules/locations/entities/Shelf";
import { Position } from "../../modules/locations/entities/Position";
import { Material } from "../../modules/materials/entities/Material";
import { Addressing } from "../../modules/locations/entities/Addressing";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    driver: require("mysql2"),  
    synchronize: true,  
    logging: false,  
    entities: [User, Group, Material, 
               Location, SubLocation, Hall, Shelf, Position, Addressing
            ],
    
});
