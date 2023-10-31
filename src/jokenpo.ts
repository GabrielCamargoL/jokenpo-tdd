import checkOccurrence from './utils/checkOccurrence';

export default function jokenpo(player1: string, player2: string) {
  const options = ['Stone', 'Paper', 'Scissor'];
  const playersOptions = [player1, player2];

  if (checkOccurrence(options, player1) == 0 || checkOccurrence(options, player2) == 0) return 'Bad Request';

  if (player1 == player2) return 'Draw';

  if (checkOccurrence(playersOptions, 'Stone') == 1 && checkOccurrence(playersOptions, 'Scissor') == 1) return 'Winner: Stone';

  if (checkOccurrence(playersOptions, 'Scissor') == 1 && checkOccurrence(playersOptions, 'Paper') == 1) return 'Winner: Scissor';

  if (checkOccurrence(playersOptions, 'Paper') == 1 && checkOccurrence(playersOptions, 'Stone') == 1) return 'Winner: Paper';
}