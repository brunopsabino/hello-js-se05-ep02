/*Faça um segundo script chamado index2.js que calcule uma operação de cifra em cima
 de um argumento recebido dependendo do valor de uma variável de ambiente. Se a variável ALG for igual a MD5, 
 use o algoritmo MD5. Se não houver a variável ALG, use o algoritmo SHA256 visto no exemplo.*/

 //Utilizando variavel de ambiente
/* if(!process.env.ALG)
    console.log('ALG variable is not set')

console.log("ALG: %s",process.env.ALG)*/

const CryptoJS = require("crypto-js")

if(process.argv.length < 3){
    console.log('usage: node index2.js value')
    return
  }else{
    let ALG = process.argv[2]
        if(ALG == 'MD5'){
            console.log(ALG + ' : ' +CryptoJS.MD5(ALG).toString(CryptoJS.enc.Base64))
        }
        if(ALG == 'SHA256'){
            console.log( ALG + ' : ' +CryptoJS.SHA256(ALG).toString(CryptoJS.enc.Base64))
        }
  }
