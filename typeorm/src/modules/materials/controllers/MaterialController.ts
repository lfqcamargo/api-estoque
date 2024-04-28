import { Request, Response } from "express";
import { MaterialService } from "../services/MaterialService";


export class MaterialController {
    private materialService = new MaterialService();

    public async create(req: Request, res: Response) {
        const materialData = req.body;

        try {
            const newMaterial = await this.materialService.create(materialData);
            if (newMaterial != null) {
                return res.status(201).json({ message: "materialo Criado Com Sucesso." })
            } else {
                return res.status(400).json({ message: "Falha ao Criar materialo." })
            };
        } catch (erro) {
            return res.status(500).json({ message: `Error Interno do Servidor.`, erro: erro.message })
        };
    };

    public async readById(req: Request, res: Response) {
        const { id } = req.params;
        const materialId = Number(id);

        try {
            const material = await this.materialService.findById(materialId);
            if (material != null) {
                return res.status(200).json(material)
            } else {
                return res.status(404).json({ message: `materialo de ID: ${materialId} Não Encontrado.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

    public async readAll(req: Request, res: Response) {
        try {
            const listMaterials = await this.materialService.findAll();
            console.log(listMaterials)
            if (listMaterials != null) {
                return res.status(200).json(listMaterials)
            } else {
                return res.status(404).json({ message: "Nenhum materialo Encontrado." })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

    public async update(req: Request, res: Response) {
        const { id }   = req.params;
        const { MaterialData } =  req.body;
        const MaterialId = Number(id);
        try {
            const result = await this.materialService.update(MaterialId, MaterialData);
            if (result > 0) {
                return res.status(200).json({ message: `materialo ${MaterialId} Foi Atualizado Com Sucesso.` })
            } else {
                return res.status(400).json({ message: `Erro ao Atualizar materialo ${MaterialId}.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor", erro: erro.message })
        };
    };

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const MaterialId = Number(id);
        try {
            const result = await this.materialService.delete(MaterialId);
            if (result > 0) {
                return res.status(200).json({ message: `materialo ${MaterialId} Foi Deletado.`})
            } else {
                return res.status(400).json({ message: `Erro ao Delete materialo ${MaterialId}.` })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

};