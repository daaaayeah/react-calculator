const RULE = {
  MAX_DIGIT_LENGTH: 3,
  MAX_OPERATION_COUNT: 1,
};

const ERROR_MESSAGE = {
  IS_OVER_MAX_DIGIT_LENGTH: `${RULE.MAX_DIGIT_LENGTH}자리까지 입력할 수 있어요.`,
  IS_OVER_MAX_OPERATION_COUNT: `연산자는 ${RULE.MAX_OPERATION_COUNT}개까지 입력할 수 있어요.`,
};

export { RULE, ERROR_MESSAGE };
