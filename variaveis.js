let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totald = 0;
let x = c;
x = 5;
total = a + b + c;      
totald = a + b + c / x;  
console.log("valor do total é:", total);
console.log("valor do totald é:", totald);
console.log(outraconta());
console.log(media());
console.log(carros());
console.log(triangulo());
console.log(array());

//inicio da function

function outraconta(){
    var d=10;
    var e=20;
    var f=30;
    var tot=0;
    var totd=0;
    var xx=100
    tot= d+e+f;
    totd = (d+e+f)/xx;
    //console.log ("valor de tot é", tot);
    //console.log ("valor de totd é", totd);
    return tot;
    return totd;
   }


   function media(){
    let nfinal=0;
    n1=30;
    n2=90;
    n3=100;
    nfinal=(n1+n2+n3)/3
    console.log ('a média final do aluno é', nfinal.toFixed(2));
   }


function carros(){
    carro1= "fusca";
    carro2="uno";
    
    kmcarro1=6;
    kmcarro2=4;
    
    precokm1= 20;
    precokm2= 35;
    
    totalcarro1= kmcarro1*precokm1;
    totalcarro2= kmcarro2*precokm2;
    
    console.log("O total do", carro1, "é:", totalcarro1);
    console.log("O total do", carro2, "é:", totalcarro2);    
}

function triangulo(){
b=5;
a=2;
t=b*a/2;

console.log("o valor da area e:",t);
}

function array(){
let frutas=["maçã","banana","laranja"];
console.log(frutas.length);
console.log(frutas);
frutas.push("manga");
console.log(frutas);
console.log(frutas.length);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.push("uva");
frutas.push("amora");
frutas.push("mexerica","abacate","abacaxi");
console.log(frutas);
console.log("a fruta na posição 1 é", frutas [1]);
console.log(frutas.length)
console.log("o total de registros é de ",frutas.length+1,"frutas.");

}