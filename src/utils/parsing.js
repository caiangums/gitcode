import {isStringEmpty} from './validation';

export const parseProfileStatNumber = (value) =>
  value > 1000 ? `${Math.floor(value / 1000)}K` : value;

export const parseNumericValues = (values) =>
  values.reduce(
    (acc, value) =>
      isStringEmpty(acc)
        ? `${parseProfileStatNumber(value)}`
        : `${acc}\n${parseProfileStatNumber(value)}`,
    '',
  );
