import QuestionTitleConfig from "./QuestionTitle/index";
import QuestionInfoConfig from "./QuestionInfo/index";
import QuestionCheckboxConfig from "./QuestionCheckbox/index";
import QuestionInputConfig from "./QuestionInput/index";
import QuestionParagraphConfig from "./QuestionParagraph/index";
import QuestionRadioConfig from "./QuestionRadio/index";
import QuestionTextareaConfig from "./QuestionTextarea/index";
import QuestionUploadConfig from "./QuestionUpload/index";

const components = [
  QuestionTitleConfig,
  QuestionInfoConfig,
  QuestionCheckboxConfig,
  QuestionInputConfig,
  QuestionParagraphConfig,
  QuestionRadioConfig,
  QuestionTextareaConfig,
  QuestionUploadConfig,
];

export function getComponentConfig(type: string) {
  return components.find((item) => item.type === type);
}
