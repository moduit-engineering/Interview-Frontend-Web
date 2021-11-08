import { RequestPublic } from './headerRequest';
/**
 * @author wahyu fatur rizki (+62 822 7458 6011)
 * @return { obj }
 */

// FIXME: CORS issue in BE side from moduit API, please take a look thankyou, while now I'm adding mockdata first
export const getQuestionOneFrontEnd = () => {
	const response = RequestPublic().get('/frontend/web/question/one');
	return response;
};

export const getQuestionTwoFrontEnd = () => {
	const response = RequestPublic().get(
		'/frontend/web/question//frontend/web/question/two'
	);
	return response;
};
