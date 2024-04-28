import { Router } from "express";
import { AddressingController } from "../controllers/AddressingController";

const routes = Router();
const addressingController = new AddressingController();

routes.post('/addressings', (req, res) => {addressingController.create(req,res)});
routes.get ('/addressings/:locationId/:subLocationId/:hallId/:shelfId/:positionId', (req, res) => {addressingController.findById(req,res)});
routes.get ('/addressings', (req, res) => {addressingController.findAll(req,res)});
routes.put ('/addressings/:locationId/:subLocationId/:hallId/:shelfId/:positionId', (req, res) => {addressingController.update(req,res)});
routes.delete ('/addressings/:locationId/:subLocationId/:hallId/:shelfId/:positionId', (req, res) => {addressingController.delete(req,res)});

export default routes;

