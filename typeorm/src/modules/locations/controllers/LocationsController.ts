import { Request, Response } from "express";

export class LocationsController<T> {
    constructor(private entidadeService: any) {}

    public async findAll(req: Request, res: Response) {
        try {
            const registros = await this.entidadeService.findAll();
            return res.status(200).json(registros);
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor", error: error.message });
        }
    }

    public async findById(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id)
        try {
            const registro = await this.entidadeService.findById(Number(id));
            if (!registro) {
                return res.status(404).json({ message: "Registro não encontrado" });
            }
            return res.status(200).json(registro);
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor", error: error.message });
        }
    }

    public async create(req: Request, res: Response) {
        const dados = req.body;
        try {
            const novoRegistro = await this.entidadeService.create(dados);
            return res.status(201).json(novoRegistro);
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor", error: error.message });
        }
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const dadosAtualizar = req.body;
        try {
            const foiAtualizado = await this.entidadeService.update(Number(id), dadosAtualizar);
            if (foiAtualizado.affected === 0) {
                return res.status(404).json({ message: "Registro não encontrado" });
            }
            return res.status(200).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor", error: error.message });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const foiDeletado = await this.entidadeService.delete(Number(id));
            if (foiDeletado.affected === 0) {
                return res.status(404).json({ message: "Registro não encontrado" });
            }
            return res.status(200).json({ message: "Registro deletado com sucesso" });
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor", error: error.message });
        }
    }
}