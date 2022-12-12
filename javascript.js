let loan= 2000000;
let month= 1;
let r = 8.4;
calEmi();

function calEmi() {
  rate = 8.4 /12;
  console.log ("rate is" + rate);

  emi = loan * rate * 1 + rate * 1 + month -1;
  console.log("emi of 1 month is" +emi);

  yearlyemi = emi * 12;
  console.log ("yearly emi is" + yearlyemi);

  tenyr = yearlyemi * 10;
  console.log ('tenyear emi is' + tenyr);
} 

