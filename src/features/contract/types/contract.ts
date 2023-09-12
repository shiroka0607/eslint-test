namespace Contract {
  export type SearchCondition = {
    title: string;
  };
  export type ResponseItems = {};
  export const header = [
    {
      text: '契約名',
      value: 'contractName',
    },
    {
      text: 'メールアドレス',
      value: 'mail',
    },
  ];
}

export default Contract;
