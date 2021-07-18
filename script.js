let nome = "pedro";

let sobrenome = "galdino";

let nomeCompleto = nome + ' ' + sobrenome;


if (nome == 'pedro' && sobrenome == 'galdino') {
    console.log("nomes estão corretos");
} else if (nome == 'pedro' || sobrenome == 'galdino') {
    console.log("nomes estão incompletos");
} else {
    console.log("Nomes estão errados")
}

switch (nomeCompleto) {
    case ('pedro galdino'):
        console.log("OK");
        break;

    default:
        console.log("Nome imcompleto");
        break;
}
let count = 0;
while (count < 100) {
    console.log(count);
    count++;
}

const vetor = [10, 20, 30, 40, 50];
for (let valor of vetor) {
    console.log(valor);
}