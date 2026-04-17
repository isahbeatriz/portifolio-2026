function calcularMedia(NUMEROS) {//CRIA A FUNCTION E PASSA COMO PARAMETRO VARIAVEL numeros
    let soma = 0;//ZERA A VARIAVEL 
    LET totalNumeros = numeros.length; // 3 numeros 10, 20, 30
    for (let i = 0; i < totalNumeros; i++) { // INICIA VARIAVEL DO ZERO E PERGUNTA SE É MENOR QUE 3 (numeros.length)
        soma += numeros[i];// SOMA RECEBE VARIAVEL NUMEROS SOMANDO AS POSIÇÕES [i] SENDO QUE O FOR SÓ VAI ATE 3.
        console.log(i);//s´po pra mostrar na tela as posições de i (ou seja do laço FOR)
        console.log(numeros); // só para mostrar o que está armazenado
            }
            return soma / totalNumeros;
        }
        console.log(calcularMedia([10, 20, 30]));//saida: 20