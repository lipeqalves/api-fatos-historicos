import fatosHistoricos from "../data/fatos.js";

export const serviceBuscarFatoPorAno = (ano) => {
    //minha Solução
    //let fatoHistorico = fatosHistoricos.filter((fato) => fato.ano === ano);
    //let fato = fatoHistorico[0].Fato

    //Solução Devmedia
    let fatoHistorico = fatosHistoricos.find((fato) => fato.ano === ano);
    let fato = fatoHistorico

    return fato;
}

export const servicoValidaAno = (ano) => {
    if (isNaN(ano)) {
        return false;
    }
    else {
        if (ano >= 1920 && ano <= 2020) {
            return true;
        }
        else {
            return false;
        }
    }
}