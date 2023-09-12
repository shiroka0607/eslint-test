import React from 'react';
import useClickCount from '@features/clickCount/hooks/useClickCount';

const CountButton = (): JSX.Element => {
  const { clickCount, increment, decrement } = useClickCount();

  return (
    <div>
      {`${clickCount} `}
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
    </div>
  );
};

export default CountButton;
