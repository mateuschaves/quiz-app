export function getScoreStatistic(allQuestions: number, correctQuestions: number) {
  if (!allQuestions) return '0%';
  return `${((correctQuestions / allQuestions) * 100).toFixed(0)}%`;
}
