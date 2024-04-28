import { Router }        from 'express';
import locationsRoutes   from './locationRoutes';
import subLocationRoutes from './subLocationRoutes';
import hallRoutes        from './hallRoutes';
import shelfRoutes       from './shelfRoutes';
import positionRoutes    from './positionRoutes';
import addressingRoutes  from './addressingRoutes';

const routesLocations = Router()

routesLocations.use(locationsRoutes);
routesLocations.use(subLocationRoutes);
routesLocations.use(hallRoutes);
routesLocations.use(shelfRoutes);
routesLocations.use(positionRoutes);
routesLocations.use(addressingRoutes);

export default routesLocations;