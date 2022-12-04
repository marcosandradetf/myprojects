const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth();

// Continue daqui

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let date = `2022 ${mesAtual + 1} ${diaAtual}`;
let date2 = new Date(date);

function countDays() {
  let date3 = document.form_main.dia.value;
  let date4 = document.form_main.mes.value;
  let date5 = `${date4} ${date3}`
  let date6 = new Date(date5);

  let date_ini = date2;
  let date_end = date6;

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);

}


/*
Crie uma aplicação que solicite ao usuário o dia e o mês de seu aniversário.

O programa deve informar para o usuário quantos dias faltam para o seu aniversário ou quantos dias já se passaram.

O Arquivo script.js já contém as variáveis que pegam o dia e o mês atual, em tempo de execução.
*/