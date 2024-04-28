import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService = new UserService();

    public async create(req: Request, res: Response) {
        const dataUser = req.body;
        try {
            const newUser = await this.userService.create(dataUser);
            return res.status(201).json(newUser);
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    }

    public async readById(req: Request, res: Response) {
        const { id } = req.params;
        const numberId = Number(id);
        try {
            const user = await this.userService.findById(numberId);
            if (!user) {
                return res.status(404).json({ message: "Usuário Não Encontrado." });
            }
            return res.status(200).json(user);
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    }

    public async readAll(req: Request, res: Response) {
        try {
            const listaUsers = await this.userService.findAll();
            return res.status(200).json(listaUsers);
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const updatedData = req.body;
        const numberId = Number(id);
        try {
            await this.userService.update(numberId, updatedData);
            return res.status(200).json({ message: "Usuário Atualizado" });
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const numberId = Number(id);
        try {
            await this.userService.delete(numberId);
            return res.status(200).json({ message: `Usuário de ID:${numberId} Foi Deletado.` });
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    }
}
