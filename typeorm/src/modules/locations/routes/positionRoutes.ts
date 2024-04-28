import { Router } from "express";
import { PositionController } from "../controllers/PositionController";

const routes = Router();
const positionController = new PositionController();

routes.post('/positions', (req, res) => {positionController.create(req,res)});
routes.get ('/positions/:id', (req, res) => {positionController.findById(req,res)});
routes.get ('/positions', (req, res) => {positionController.findAll(req,res)});
routes.put ('/positions/:id', (req, res) => {positionController.update(req,res)});
routes.delete ('/positions/:id', (req, res) => {positionController.delete(req,res)});

export default routes;

