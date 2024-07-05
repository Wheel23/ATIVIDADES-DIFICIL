//Questão 1
function soma(){
    let a = 1, b = 2
    let resul = a + b
    console.log(3+5)
}


//Questão 2
function veri(){
    let a = 3, b = 2
    if(a % 2 == 0){
        console.log("Positivo")
    }else{
        console.log("Não é positivo")
    }

    if(a/2 == 0){
        console.log("É zero")
    }
}



//resolução da Prof da questão 2
let numero = -1

if(numero > 0){
    console.log("numero positivo")
}else if(numero < 0){
    console.log("negativo")
}else{
    console.log("Númeoro = 0")
}

//Questão 3

function veio(){
    let count = 0; 
let adiciona = "a"; 
let Palavras = "banana embananada da casca da banana"; 
 
for (let i = 0, j = Palavras.length; i < j; i++) { 
    if (Palavras[i].toLowerCase() == adiciona) { 
       count++; 
    } 
} 
 
console.log("Achou "+ count + " letras " + adiciona); 
}


//Questão 4
function media(){
    let a = 1, b = 2, c = 3
    let media = (a+b+c)/3
    console.log(media)
}

//Questão 5
function aleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 100);
    console.log(numeroAleatorio);
}

//Questão 6
    function Somar(al) {
        var total = 0;
        for (var i = 0; i < al.length; i++) {
            if (al[i] >= 0) {
                total += al[i];
            }
        }
        return total;
    }
    var al = [0, 5, 5, 3];
    console.log(Somar(al));

    //Questão 7
    function contarPalavrasUnicas(frase) {
        frase = frase.replace(/[^\w\s]/g, '');
    
        frase = frase.toLowerCase();

        let palavras = frase.split(/\s+/);
    
        let palavrasUnicas = new Set();
    
        let i = 0;
        while (i < palavras.length) {

            palavrasUnicas.add(palavras[i]);
            i++;
        }
    
    
        return palavrasUnicas.size;
    }
    
    let frase = "MAGUA ADELAPA";
    console.log("Número de palavras únicas na frase:", contarPalavrasUnicas(frase));

    //Questão 8
    let despesa = {
        descricao: "Compras de supermercado",
        valor: 150.75,
        data: "2024-07-05"
    };
    
    console.log("Descrição da despesa:", despesa.descricao);
    console.log("Valor da despesa:", despesa.valor);
    console.log("Data da despesa:", despesa.data);
    
    //Questão 9
let pessoa = {
    nome: "Luiz",
    peso: 70,     
    altura: 1.75  
};

function calcularIMC(pessoa) {
    let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    return imc.toFixed(2);
}


function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}


let imc = calcularIMC(pessoa);


let interpretacao = interpretarIMC(imc);


console.log(`${pessoa.nome} tem um IMC de ${imc}, o que indica ${interpretacao}.`);

    