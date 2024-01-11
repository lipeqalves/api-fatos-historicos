import express from 'express';
import dotenv from 'dotenv';

import { serviceBuscarFatoPorAno, servicoValidaAno } from './service/service.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Fatos historicos' });
});

app.get('/fato', (req, res) => {
    let anoFato = req.query.ano;
    if (servicoValidaAno(anoFato)) {
        var fato = serviceBuscarFatoPorAno(anoFato);
        res.json(fato)
    } else {
        res.status(400).json({ erro: 'Parâmetro ano inválido' })
    }

})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: ${PORT}`);
});