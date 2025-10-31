import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const dataSource = './data/list.txt';

const router = express.Router();

router.post('/contato', async (req, res) => {
    const { name } = req.body;
    // let name = req.body.name

    if(!name || name.length < 2 ) {
       return res.json({ error: 'Nome é obrigatório e precisa ter pelo menos dois caracteres.'});
    } 

    // Processamento dos dados
    let list: string[] = [];

    try {
        const data = await readFile(dataSource, { encoding: 'utf8'});
        list = data.split('\n')
    } catch(err) {}

    list.push(name);
    await writeFile(dataSource, list.join('\n'));

    res.status(201).json( {contato: name});

});


export default router;