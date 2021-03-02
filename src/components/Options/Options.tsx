import { FC } from 'react';
import { INPUT_MODE_LIST } from 'constant';
import { map } from 'lodash/fp';
import { Switch } from 'components';
import styles from './Options..module.scss';

const currentMode = INPUT_MODE_LIST[0];

const Options: FC = () => (
  <div className={styles.container}>
    <div>
      <div className={styles.title}>Input Mode</div>
      <div className={styles.inputMode}>
        {map((mode: string) => (
          <button
            key={mode}
            type="button"
            className={`${styles.mode} ${mode === currentMode ? styles.active : ''}`}
          >
            {mode}
          </button>
        ), INPUT_MODE_LIST)}
      </div>
    </div>

    <div>
      <div className={styles.title}>Confidence Threshold</div>
      <div className={styles.inputConfidenceThreshold}>
        <input
          className={styles.range}
          type="range"
          min="0"
          max="1"
          step="0.01"
        />
        <div className={styles.value}>0.00</div>
      </div>

    </div>

    <div className={styles.inputSwitch}>
      <div className={styles.title}>Output Cropped Image</div>
      <Switch value />
    </div>

    <div className={styles.inputSwitch}>
      <div className={styles.title}>Output Visualized Image</div>
      <Switch value={false} />
    </div>

    <button
      className={styles.button}
      type="button"
    >
      Detect
    </button>
  </div>
);

export default Options;
