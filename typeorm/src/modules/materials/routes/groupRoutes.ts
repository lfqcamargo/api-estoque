import { Router } from "express";
import { GroupController } from "../controllers/GroupController";

const routes = Router();
const groupController = new GroupController();

routes.post('/groups', (req, res) => {groupController.create(req,res)});
routes.get ('/groups/:id', (req, res) => {groupController.readById(req,res)});
routes.get ('/groups', (req, res) => {groupController.readAll(req,res)});
routes.put ('/groups/:id', (req, res) => {groupController.update(req,res)});
routes.delete ('/groups/:id', (req, res) => {groupController.delete(req,res)});

export default routes;

