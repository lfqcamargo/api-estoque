import { Router } from "express";
import { ShelfController } from "../controllers/ShelfController";

const routes = Router();
const shelfController = new ShelfController();

routes.post('/shelfs', (req, res) => {shelfController.create(req,res)});
routes.get ('/shelfs/:id', (req, res) => {shelfController.findById(req,res)});
routes.get ('/shelfs', (req, res) => {shelfController.findAll(req,res)});
routes.put ('/shelfs/:id', (req, res) => {shelfController.update(req,res)});
routes.delete ('/shelfs/:id', (req, res) => {shelfController.delete(req,res)});

export default routes;

