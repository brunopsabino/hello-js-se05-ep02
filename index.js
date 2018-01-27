/*Exercícios básicos de Javascript
Neste script faça um código que teste se o valor passado por parâmetro para o script é par ou ímpar. 
Se for par, deve imprimir "PAR". Caso contrário, deve imprimir "ÌMPAR"*/

if(process.argv.length < 3){
    console.log('usage: node index.js value')
    return
  }else{
    process.argv[2]%2!=0? console.log('ÍMPAR'): console.log('PAR')
  }
