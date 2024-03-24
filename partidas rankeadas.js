//Calculadora de Partidas Rankeadas
//#variáveis, operadores, laços de repetição, estrutura de decisões, funções

let nickName = ("Renata")

console.log("Bem vindo ao mais novo desafio da Dio, " + nickName + "!")

function partidas(){
    let n1 = 1
    let n2 = 90
    let res = n1*n2
    if(res <= 10)
        return "O Herói tem de saldo de 10 Vitórias, e está no nivel, Ferro !"
    else if(res <=20)
        return "O Herói tem de saldo de 20 Vitórias, e está no nivel, Bronze !"
    else if(res <=50)
        return "O Herói tem de saldo de 50 Vitórias, e está no nivel, Prata !" 
    else if(res <=80)
        return "O Herói tem de saldo de 80 Vitórias, e está no nivel, Ouro !"
    else if(res <=90)
        return "O Herói tem de saldo de 90 Vitórias, e está no nivel, Diamante !"
    else if(res <=100)
        return "O Herói tem de saldo de 100 Vitórias, e está no nivel, Lendário !"
    else if(res >=101)
        return "O Herói tem de saldo de 101 Vitórias, e está no nivel, Imortal !"
}
let res = partidas()
console.log(res)

