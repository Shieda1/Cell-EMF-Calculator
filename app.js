// https://www.omnicalculator.com/chemistry/electromotive-force#emf-equation

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EMFRadio = document.getElementById('EMFRadio');
const anodeRadio = document.getElementById('anodeRadio');
const cathodeRadio = document.getElementById('cathodeRadio');

let EMF;
let anode = v1;
let cathode = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

EMFRadio.addEventListener('click', function() {
  variable1.textContent = 'Anode';
  variable2.textContent = 'Cathode';
  anode = v1;
  cathode = v2;
  result.textContent = '';
});

anodeRadio.addEventListener('click', function() {
  variable1.textContent = 'EMF';
  variable2.textContent = 'Cathode';
  EMF = v1;
  cathode = v2;
  result.textContent = '';
});

cathodeRadio.addEventListener('click', function() {
  variable1.textContent = 'EMF';
  variable2.textContent = 'Anode';
  EMF = v1;
  anode = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(EMFRadio.checked)
    result.textContent = `EMF = ${computeEMF().toFixed(2)}`;

  else if(anodeRadio.checked)
    result.textContent = `Anode = ${computeAnode().toFixed(2)}`;

  else if(cathodeRadio.checked)
    result.textContent = `Cathode = ${computeCathode().toFixed(2)}`;
})

// calculation

function computeEMF() {
  return Number(cathode.value) - Number(anode.value);
}

function computeAnode() {
  return Number(cathode.value) - Number(EMF.value);
}

function computeCathode() {
  return Number(EMF.value) + Number(anode.value);
}