import { Router } from 'express';
import groupRoutes from './groupRoutes';
import materialRoutes from './materialRoutes';

const routesMaterials = Router()

routesMaterials.use(groupRoutes);
routesMaterials.use(materialRoutes);

export default routesMaterials;