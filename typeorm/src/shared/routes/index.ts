import { Router } from 'express';
import routesSystem from '../../modules/system/routes';
import routesMaterials from '../../modules/materials/routes';
import routesLocations from '../../modules/locations/routes';

const route = Router()

route.use(routesSystem);
route.use(routesMaterials);
route.use(routesLocations);

export default route;