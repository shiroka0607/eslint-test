import { useState } from 'react';
import ClickCount from '@features/clickCount/types/ClickCount';

const useClickCount = (): ClickCount.ClickCount => {
  const [clickCount, setCount] = useState<number>(0);
  const increment = (): void => setCount((count) => count + 1);
  const decrement = (): void => setCount((count) => count - 1);

  return { clickCount, increment, decrement };
};
export default useClickCount;
