import { Router } from "express";
import { SubLocationController } from "../controllers/SubLocationController";

const routes = Router();
const subLocationController = new SubLocationController();

routes.post('/sublocations', (req, res) => {subLocationController.create(req,res)});
routes.get ('/sublocations/:id', (req, res) => {subLocationController.findById(req,res)});
routes.get ('/sublocations', (req, res) => {subLocationController.findAll(req,res)});
routes.put ('/sublocations/:id', (req, res) => {subLocationController.update(req,res)});
routes.delete ('/sublocations/:id', (req, res) => {subLocationController.delete(req,res)});

export default routes;

