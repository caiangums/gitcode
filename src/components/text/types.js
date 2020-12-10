import styles from './styles';

const Types = new Map([
  [
    'normal',
    {
      textStyles: styles.normal,
    },
  ],
  [
    'title',
    {
      textStyles: styles.title,
    },
  ],
  [
    'subtitle',
    {
      textStyles: styles.subtitle,
    },
  ],
  [
    'small',
    {
      textStyles: styles.small,
    },
  ],
]);

export default Types;
