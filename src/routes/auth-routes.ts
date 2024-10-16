import {Router, Request, Response, response} from "express";
import  axios  from "axios";

const route = Router();

interface Endereco {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
    erro: string
}

//Rota consultar cep

route.get("/consultar/:id", async (req: Request, res: Response)=> {
    const id = req.params.id
    console.log(id)
    if(!id) {
        res.status(401).json({ message: "Cep não informado" })
    }

    const consultar = await axios.get<Endereco>(`http://viacep.com.br/ws/${id}/json/`)

    console.log(consultar.data)

    if(consultar.data.erro) {
         res.status(404).json({ 
        Erro: "Cep não encontrado"
        })
        return
    }

    res.status(201).json({
        Mensagem: `Seu endereço é:`,
        Bairro: consultar.data.bairro,
        Logradouro: consultar.data.logradouro

    })
})

export { route }