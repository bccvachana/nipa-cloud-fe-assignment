import { FC } from 'react';
import {
  PageContainer, Options, FileUpload,
} from 'components';
import 'styles/global.scss';
import styles from './App.module.scss';

const App: FC = () => (
  <PageContainer
    bodyClassName={styles.body}
  >
    <div className={styles.title}>
      Nipa.Cloud Nvision's Object Detection
    </div>
    <div className={`${styles.box} ${styles.inputBox}`}>
      <FileUpload />
      <div className={styles.option}>
        <Options />
      </div>
    </div>
    <div className={`${styles.box} ${styles.resultBox}`}>
      Result
    </div>
  </PageContainer>
);

export default App;
