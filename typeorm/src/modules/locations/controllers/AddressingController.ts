import { Request, Response } from "express";
import { AddressingService } from "../services/AddressingService";

export class AddressingController {
    private addressingService = new AddressingService();

    public async create(req: Request, res: Response) {
        const addressingData = req.body;

        try {
            const newAddressing = await this.addressingService.create(addressingData);
            if (newAddressing != null) {
                return res.status(201).json({ message: "Endereçamento Criado Com Sucesso." })
            } else {
                return res.status(400).json({ message: "Falha ao Criar Endereçamento." })
            };
        } catch (erro) {
            return res.status(500).json({ message: `Error Interno do Servidor.`, erro: erro.message })
        };
    };

    public async findById(req: Request, res: Response) {
        const ids = {
            locationId: parseInt(req.params.locationId),
            subLocationId: parseInt(req.params.subLocationId),
            hallId: parseInt(req.params.hallId),
            shelfId: parseInt(req.params.shelfId),
            positionId: parseInt(req.params.positionId)
        };
    
        try {
            const addressing = await this.addressingService.findById(ids);
            if (addressing) {
                return res.status(200).json(addressing);
            } else {
                return res.status(404).json({ message: "Endereçamento Não Encontrado." });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: error.message });
        };
    };

    public async findAll(req: Request, res: Response) {
        try {
            const listaddressings = await this.addressingService.findAll();
            console.log(listaddressings)
            if (listaddressings != null) {
                return res.status(200).json(listaddressings)
            } else {
                return res.status(404).json({ message: "Nenhum Endereçamento Encontrado." })
            };
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message })
        };
    };

    public async update(req: Request, res: Response) {
        const ids = {
            locationId: parseInt(req.params.locationId),
            subLocationId: parseInt(req.params.subLocationId),
            hallId: parseInt(req.params.hallId),
            shelfId: parseInt(req.params.shelfId),
            positionId: parseInt(req.params.positionId)
        };
        
        const addressingData = req.body;
        try {
            const result = await this.addressingService.update(ids, addressingData);
            if (result > 0) {
                return res.status(200).json({ message: "Endereçamento Atualizado Com Sucesso." });
            } else {
                return res.status(400).json({ message: "Falha ao Atualizar Endereçamento." });
            }
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    };
    
    public async delete(req: Request, res: Response) {
        const ids = {
            locationId: parseInt(req.params.locationId),
            subLocationId: parseInt(req.params.subLocationId),
            hallId: parseInt(req.params.hallId),
            shelfId: parseInt(req.params.shelfId),
            positionId: parseInt(req.params.positionId)
        };
        console.log(ids)
        try {
            const result = await this.addressingService.delete(ids);
            if (result > 0) {
                return res.status(200).json({ message: "Endereçamento Deletado Com Sucesso." });
            } else {
                return res.status(400).json({ message: "Falha ao Deletar Endereçamento." });
            }
        } catch (erro) {
            return res.status(500).json({ message: "Erro Interno do Servidor.", erro: erro.message });
        }
    };

};