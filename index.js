
let vitorias = 120
let derrotas = 1


function derrotaseVitorias(quantidadeVitorias,quantidadeDerrotas){
    let resultado = quantidadeVitorias - quantidadeDerrotas
    let rank
    if (resultado <=10){
        rank = "Ferro"
    } else if (resultado >10 && resultado <= 20){
        rank = "Bronze"
    } else if (resultado >20 && resultado <= 50){
        rank = "Prata"
    } else if (resultado >50 && resultado <= 80){
        rank = "Ouro"
    } else if (resultado >80 && resultado <= 90){
        rank = "Diamanete"
    } else if (resultado >90 && resultado <= 100){
        rank = "Lendário"
    } else if (resultado >100){
        rank = "Imortal"
    }

    console.log("O Herói tem saldo de " + resultado + " e está no nível " + rank)
}

derrotaseVitorias(vitorias,derrotas)