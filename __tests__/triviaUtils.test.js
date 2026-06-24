import { randomQuestionType, QUESTION_TYPES } from '../app/lib/triviaUtils';

describe('triviaUtils', () => {
  test('randomQuestionType should return a valid type from QUESTION_TYPES', () => {
    const type = randomQuestionType();
    expect(QUESTION_TYPES).toContain(type);
  });
});
