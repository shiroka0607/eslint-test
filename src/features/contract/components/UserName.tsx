import React from 'react';
import User from '../types/User';

const Name = ({ userName }: User.UserName): JSX.Element => (
  <div>{userName}</div>
);

export default Name;
