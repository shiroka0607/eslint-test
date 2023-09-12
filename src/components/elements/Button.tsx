import React from 'react'

type  Props = {
    text : string,
};


const Button = ({text}:Props):JSX.Element => {
  const button = 'ボタン'
  return <button type='button'>{text}{`${button}`}</button>;
};

export default Button

