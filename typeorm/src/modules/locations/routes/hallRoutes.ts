import { Router } from "express";
import { HallController } from "../controllers/HallController";

const routes = Router();
const hallController = new HallController();

routes.post('/halls', (req, res) => {hallController.create(req,res)});
routes.get ('/halls/:id', (req, res) => {hallController.findById(req,res)});
routes.get ('/halls', (req, res) => {hallController.findAll(req,res)});
routes.put ('/halls/:id', (req, res) => {hallController.update(req,res)});
routes.delete ('/halls/:id', (req, res) => {hallController.delete(req,res)});

export default routes;

