import React from 'react';
import ClickCount from '@features/clickCount/types/ClickCount';

const Button = ({ count }: ClickCount.Count): JSX.Element => <div>{count}</div>;

export default Button;
