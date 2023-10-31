import jokenpo from '../src/jokenpo';

//testing the jest module config
test('adds 1 + 2 to equal 3', () => {
  expect(true).toBe(true);
});


// jokenpo tests
test('Should return a string', () => {
  const instance = jokenpo('Stone', 'Stone');
  expect(typeof instance).toBe('string');
});

test('Should Paper be the winner', () => {
  const possiblePaperWin = jokenpo('Paper', 'Stone');
  expect(possiblePaperWin).toBe('Winner: Paper');
});

test('Should Stone be the winner', () => {
  const possibleStoneWin = jokenpo('Scissor', 'Stone');
  expect(possibleStoneWin).toBe('Winner: Stone');
});

test('Should Scissor be the winner', () => {
  const possibleScissorWin = jokenpo('Scissor', 'Paper');
  expect(possibleScissorWin).toBe('Winner: Scissor');
});

test('Should return a draw', () => {
  const possibleDraw = jokenpo('Paper', 'Paper');
  expect(possibleDraw).toBe('Draw');
});

test('Should return an error', () => {
  const possibleError = jokenpo('Paper', 'x');
  expect(possibleError).toBe('Bad Request');
});
