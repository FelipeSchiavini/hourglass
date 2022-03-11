const readLineSync = require('readline-sync')

const write = (text, quant) => {
    if(!quant) return ""
    return text.repeat(quant)
} 

const printError = () => {
    console.log('Você digitou um valor inválido!')
}

const isOdd = (number) => {
    if (number % 2 == 1) return 1;
    return 0;
}

const printHourglass = (n, full = false) => {
    const inflectionPoint = (n - 4)/2
    const oneIfIsOdd = isOdd(n)
    console.log(write ('#', n))
    for (i = 0; i < n-2; i++) {
        if(i <= inflectionPoint) {
            console.log(`${write ('#', 1)}${write (' ', i)}${write ('#', 1)}${write (full ? " " : "#"  , n-i*2-4)}${write ('#',1)}${write (' ', i)}${write ('#', 1)}`)
        }
        if (i == Math.floor(n/2) && isOdd(n)) console.log(`${write ('#', 1)}${write (' ',i-1)}${write ('#', 1)}${write (' ',i-1)}${write ('#', 1)}`)
        
        if(i > inflectionPoint + oneIfIsOdd) {
            console.log(`${write ('#', 1)}${write (' ',(n-3)-i)}${write ('#', 1)}${write (full ? "#" : " ", 2*i -(n-2))}${write ('#', 1)}${write (' ',(n-3)-i)}${write ('#', 1)}`)
        }
    }
    console.log(write('#', n))
    console.log('n =', n)
}

let opt = 1;
while(opt>=1){
    opt = Number(readLineSync.question(`
    ${write('*', 20)}
    WELCOME TO HOURGLASS
    ${write('*', 20)}
    Escolha uma opcao:
    1 - Ampulheta Cheia
    2 - Ampulheta Vazia
    0 - Sair
    `), {hideEchoBack:true});

    if(opt === 1){
        let n = Number(readLineSync.question(
        `Digite o tamanho da ampulheta : (n>=20):`,{hideEchoBack:false}))
        if (n >= 20 ) printHourglass(n)
        if (n< 20) printError()
    } else if(opt ===2){
        let n = Number(readLineSync.question(
        `Digite o tamanho da ampulheta : (n>=20):`,{hideEchoBack:false}))
        if (n >= 20) printHourglass(n, true)
        if (n< 20) printError()
    }
}
