import express from 'express';
import routes from './shared/routes';
import { AppDataSource } from './shared/database';
import 'dotenv/config';

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        const app = express();

        app.use(express.json());
        app.use(routes);

        app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));
    }).catch(error => {
        console.error("Erro ao conectar ao banco de dados:", error);
});
