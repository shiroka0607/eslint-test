import React from 'react';

type Props = {
  name: string;
  age: number;
};

const Profile = ({ name, age }: Props): JSX.Element => (
  <p>
    私の名前は{name}です。{age}歳です。
  </p>
);

export default Profile;
