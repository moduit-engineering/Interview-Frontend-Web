import { instance, header } from "./configGlobal";

const questionOne = () => {
  return instance.get("frontend/web/question/one", header);
};

const questionTwo = () => {
  return instance.get("frontend/web/question/two", header);
};

const QuestionsServices = {
  questionOne,
  questionTwo,
};

export default QuestionsServices;
