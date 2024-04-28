import { Router } from "express";
import { MaterialController } from "../controllers/MaterialController";

const routes = Router();
const materialController = new MaterialController();

routes.post('/materials', (req, res) => {materialController.create(req,res)});
routes.get ('/materials/:id', (req, res) => {materialController.readById(req,res)});
routes.get ('/materials', (req, res) => {materialController.readAll(req,res)});
routes.put ('/materials/:id', (req, res) => {materialController.update(req,res)});
routes.delete ('/materials/:id', (req, res) => {materialController.delete(req,res)});

export default routes;

