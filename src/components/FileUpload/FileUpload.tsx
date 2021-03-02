/* eslint-disable @typescript-eslint/no-unused-vars */
import { get } from 'lodash/fp';
import { FC } from 'react';
import { toBase64 } from 'utils/common';
import styles from './FileUpload.module.scss';

const FileUpload: FC = () => (
  <>
    <input
      className={styles.input}
      type="file"
      onChange={async (e) => {
        console.log(await toBase64(get('target.files[0]', e)));
      }}
    />
  </>
);

export default FileUpload;
