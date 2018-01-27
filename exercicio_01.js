/*Entrada: [1,2,3,4,5,6,7,8,9]
  Saída:   [1p,2x,3p,4x,5p,6x,7p,8x,9p]*/

  let vetor_ini = [1,2,3,4,5,6,7,8,9];

  let vetor_final = []

  vetor_final = vetor_ini.map(e => e % 2 == 0 ? e+'x' : e+'p');
  console.log(vetor_final);
  

