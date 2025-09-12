// EXERCÍCIOS //
// A deve receber B
// B deve receber C
// C deve receber A

let a = 'A';
let b = 'B';
let c = 'C';
let temp;

//temp = a;
//a = b;
//b = c;
//c = temp;

console.log(a, b, c);

[a, b, c] = [b, c, a];

console.log(a, b, c);
// Solução 1: Usando array destructuring (como acima)

// Solução 2: Usando soma e subtração (apenas para números)
let x = 1;
let y = 2;
let z = 3;

x = x + y + z; // x agora é 6
y = x - (y + z); // y agora é 1
z = x - (y + z); // z agora é 2
x = x - (y + z); // x agora é 3

console.log(x, y, z);

// Solução 3: Usando multiplicação e divisão (apenas para números, e não funciona com zero)
let m = 1;
let n = 2;
let o = 3;

m = m * n * o; // m agora é 6
n = m / (n * o); // n agora é 1
o = m / (n * o); // o agora é 2
m = m / (n * o); // m agora é 3

console.log(m, n, o);