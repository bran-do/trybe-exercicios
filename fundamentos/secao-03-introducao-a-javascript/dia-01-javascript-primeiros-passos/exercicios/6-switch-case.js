// Movimentos do xadrez + input non-sensitive case

let pieceInput = "KinG";
let pieceLC = pieceInput.toLowerCase();

switch (pieceLC) {
    case 'pawn':
        console.log('1 forward');
        break;

    case 'knight':
        console.log('L shape');
        break;
    
    case 'bishop':
        console.log('diagonals');
        break;

    case 'rook':
        console.log('forward');
        break;
    
    case 'queen':
        console.log('diagonals and forward');
        break;

    case 'king':
        console.log('1 around');
        break;
}