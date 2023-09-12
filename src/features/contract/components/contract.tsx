import React from 'react';
import Contract from '@features/contract/types/contract';

const SearchButton = ({ title }: Contract.SearchCondition): JSX.Element => (
  <div>{title}</div>
);

export default SearchButton;
