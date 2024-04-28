import { Request, Response } from "express";
import { GroupService } from "../services/GroupService";
import { error } from "console";

export class GroupController {
    private groupService = new GroupService();

    public async create(req: Request, res: Response) {
        const groupData = req.body;

        try {
            const newGroup = await this.groupService.create(groupData);
            if (newGroup != null) {
                return res.status(201).json({ message: "Grupo Criado Com Sucesso." })
            } else {
                return res.status(400).json({ message: "Falha ao Criar Grupo." })
            };
        } catch (erro) {
            return res.status(500).json({ message: `Error Interno do Servidor.`, erro: erro.message })
        };
    };

    public async readById(req: Request, res: Response) {
        const { id } = req.params;
        const grupId = Number(id);

        try {
            const grup = await this.groupService.findById(grupId);
            if (grup != null) {
                return res.status(200).json(grup)
            } else {
                return res.status(404).json({ message: `Grupo de ID: ${grupId} Não Encontrado.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

    public async readAll(req: Request, res: Response) {
        try {
            const listGroups = await this.groupService.findAll();
            console.log(listGroups)
            if (listGroups != null) {
                return res.status(200).json(listGroups)
            } else {
                return res.status(404).json({ message: "Nenhum Grupo Encontrado." })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

    public async update(req: Request, res: Response) {
        const { id }   = req.params;
        const { groupData } =  req.body;
        const groupId = Number(id);
        try {
            const result = await this.groupService.update(groupId, groupData);
            if (result > 0) {
                return res.status(200).json({ message: `Grupo ${groupId} Foi Atualizado Com Sucesso.` })
            } else {
                return res.status(400).json({ message: `Erro ao Atualizar Grupo ${groupId}.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor", erro: erro.message })
        };
    };

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const groupId = Number(id);
        try {
            const result = await this.groupService.delete(groupId);
            if (result > 0) {
                return res.status(200).json({ message: `Grupo ${groupId} Foi Deletado.`})
            } else {
                return res.status(400).json({ message: `Erro ao Delete Grupo ${groupId}.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

};