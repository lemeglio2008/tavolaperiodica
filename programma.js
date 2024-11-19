

for (const element of elementi) {
    let contenitore = document.getElementById('contenitore');



let cella = document.createElement('div');
cella.style.borderStyle = 'solid';
cella.style.borderWidth = '0.5px';
cella.style.width = '90px';
cella.style.height = '120px'; 
cella.style.position = 'absolute';
cella.style.left = element.xpos * 90 + 'px';
cella.style.top = element.ypos * 120 + 'px';
cella.style.backgroundColor = '#' + element['cpk-hex']
cella.style.textAlign = 'center'
cella.style.boxSizing = 'border-box'
let numeroAtomico = document.createElement('p');
numeroAtomico.innerText = element.number;
cella.appendChild(numeroAtomico);


let simbolo = document.createElement('a');
simbolo.innerText = element.symbol;
simbolo.href=element.source;
cella.appendChild(simbolo);
simbolo.style.fontSize = '24px'
simbolo.style.fontWeight = 'bold'
simbolo.style.color = 'black'

let nome = document.createElement('p');
nome.innerText = element.name;
cella.appendChild(nome);

contenitore.appendChild(cella);
}