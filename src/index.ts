import promptSync from 'prompt-sync';
import jokenpo from './jokenpo';

const prompt = promptSync();

let continuePlaying = 'y';
while (continuePlaying === 'y') {
  console.log('=========================================\n');
  const player1 = prompt('Choose [Stone, Paper, Scissor] for player 1: ');
  const player2 = prompt('Choose [Stone, Paper, Scissor] for player 2: ');
  console.log(`${player1} -> ${player2}: `, jokenpo(player1, player2));
  continuePlaying = prompt('Continue? (y/n): ');
}
console.log('=========================================\n');
console.log('Thank you for playing!');