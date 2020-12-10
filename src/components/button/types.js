import styles from './styles';

const Types = new Map([
  [
    'main',
    {
      buttonStyles: styles.main,
      textStyles: styles.mainText,
    },
  ],
  [
    'danger',
    {
      buttonStyles: styles.danger,
      textStyles: styles.dangerText,
    },
  ],
]);

export default Types;
