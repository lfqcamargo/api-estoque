import { Router } from 'express';
import userRoutes from './userRoutes';

const routesSystem = Router()

routesSystem.use(userRoutes);

export default routesSystem;