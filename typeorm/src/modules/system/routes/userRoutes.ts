import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.post('/users', (req, res) => {userController.create(req,res)});
routes.get ('/users/:user_id', (req, res) => {userController.readById(req,res)});
routes.get ('/users', (req, res) => {userController.readAll(req,res)});
routes.put ('/users/:user_id', (req, res) => {userController.update(req,res)});
routes.delete ('/users/:user_id', (req, res) => {userController.delete(req,res)});

export default routes;

