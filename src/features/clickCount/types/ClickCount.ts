namespace ClickCount {
  export type ClickCount = {
    clickCount: number;
    increment: () => void;
    decrement: () => void;
  };
  export type Count = {
    count: number;
  };
}

export default ClickCount;
