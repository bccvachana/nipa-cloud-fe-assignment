import { FC } from 'react';
import { TNotReturnFunction } from 'types/common';
import styles from './Switch.module.scss';

interface ISwitchProps {
  value?: boolean;
  setValue?: TNotReturnFunction;
}

const Switch: FC<ISwitchProps> = ({
  value,
}) => (
  <div
    className={`${styles.container} ${value ? styles.active : ''}`}
    style={{
      justifyContent: !value ? 'flex-start' : 'flex-end',
    }}
  >
    <div className={styles.body} />
  </div>
);

export default Switch;
