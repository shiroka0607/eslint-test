import React from 'react';
import displayAlert from '@features/alert/services/displayAlert';

type Props = {
  text: string;
};

const ErrorButton = ({ text }: Props): JSX.Element => (
  <button onClick={displayAlert} type="button">
    {text}
  </button>
);

export default ErrorButton;
