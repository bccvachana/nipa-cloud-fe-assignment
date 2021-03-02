/* eslint-disable jsx-a11y/media-has-caption */
import { FC } from 'react';

const Webcam: FC = () => (
  <div>
    Webcam
    <video id="video">Video stream not available.</video>
  </div>
);

export default Webcam;
