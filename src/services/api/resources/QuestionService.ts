import client from '../client';
import { FetchQuestionDto } from '~/@types/dto/question';

const fetchQuestions = (fetchQuestionDto: FetchQuestionDto) => client({
  url: '',
  method: 'GET',
  params: {
    amount: fetchQuestionDto.amount,
  },
});

export default { fetchQuestions };
