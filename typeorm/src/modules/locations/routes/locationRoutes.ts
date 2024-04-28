import { Router } from "express";
import { LocationController } from "../controllers/LocationController";

const routes = Router();
const locationController = new LocationController();

routes.post('/locations', (req, res) => {locationController.create(req,res)});
routes.get ('/locations/:id/addressings', (req, res) => locationController.findAddressings(req, res));
routes.get ('/locations/:locationid/sublocation/:sublocationid/addressings', (req, res) => locationController.findAddressings(req, res));
routes.get ('/locations/:id', (req, res) => {locationController.findById(req,res)});
routes.get ('/locations', (req, res) => {locationController.findAll(req,res)});
routes.put ('/locations/:id', (req, res) => {locationController.update(req,res)});
routes.delete ('/locations/:id', (req, res) => {locationController.delete(req,res)});

export default routes;

